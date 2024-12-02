"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { heroCid } from '@/data/heroTypeData'
import { weaponCid } from '@/data/weaponTypeData'
import getTypeData from '@/tools/types/getTypeData'
import HealthImg from './images/healtImg'
import DaytimeImg from './images/daytimeImg'
import EffectImg from './images/effectImg'
import { effectName, weaponTypeEffect } from '@/types/effects'
import effectNames from '@/data/effectNames'
import TypeDeltaGraph from './type/deltaGraph'
import bonusCountsMerge from '@/tools/types/bonusCountsGraphData'
import bonusCountsSum from '@/tools/types/bonusCountsSum'
import { heroEffectStats, weaponEffectStats } from '@/types/cardStatsCounts'
import EffectGraph from './type/effectGraph'
import cardStats from '@/data/cardStats'
import deltas from '@/data/deltas'

const heroIndexesMap = [
  0, 1, 2, 5, 8, 11, 3, 6, 9, 12, 4, 7, 10, 13
]

const weaponIndexesMap = [
  0, 1, 9, 8, 7, 6, 5, 4, 3, 2
]

export default function CardTypeDetails(props: {
  type: heroCid | weaponCid
}
) {


  const [curEffectIndex, setCurEffectIndex] = useState<number>(0);
  const [isDurability, setIsDurability] = useState<boolean>(false);

  const cardType = getTypeData(props.type);

  if (!cardType) {
    return null;
  }

  let { typeData, type, curStats, island, totalCards, typeStats } = cardType;

  let mappedIndex = null;
  if (type === "hero") {
    mappedIndex = heroIndexesMap[curEffectIndex];
  } else {
    mappedIndex = weaponIndexesMap[curEffectIndex];
  }

  let hasDurability = false;

  if (type === "weapon") {
    hasDurability = ('dur' in curStats[mappedIndex]);
  }


  if (isDurability && !hasDurability) {
    setIsDurability(false);

    return (
      <div>Loading</div>
    )
  }

  // Effect chart data

  const data = curStats[mappedIndex];

  let bonusCountsChartData = bonusCountsMerge(data, type, isDurability);


  // Count of all scanned cards
  let cardCount = Object.values(data.physical).reduce((a, b) => a + b, 0);
  let typeCount = typeStats.count;

  const islandStats = cardStats.islands[island];

  let islandCards = null;

  if (type === "hero") {
    islandCards = islandStats.heroes;
  } else {
    islandCards = islandStats.weapons;
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{typeData.cname.CS}</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-8">
          <Image src={typeData.imgUrl
          } alt={typeData.cname.CS ?? "Image"} width={300} height={400} className="rounded-lg mx-auto" />
          <Card>
            <CardHeader>
              <CardTitle>Rozložení průměrů</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center rounded-lg">
                <TypeDeltaGraph type={props.type} />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Hodnota</TableHead>
                    <TableHead>Počet karet</TableHead>
                    <TableHead>Šance na setření</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deltas.map((delta) => {
                    if (!delta) return null;
                    const rarity = typeStats.rarities[delta];
                    if (!rarity?.val) return null;
                    return (
                    <TableRow key={delta}>
                      <TableCell>{delta}</TableCell>
                      <TableCell title={(rarity.val / cardCount)+"%"}>{rarity.val}</TableCell>
                      <TableCell title={(rarity.val / islandCards)+"%"}>{(rarity.val / islandCards).toFixed(6)} %</TableCell>
                    </TableRow>
                  )})}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Vyber si effekt pro zobrazení statistik</h2>
            <div className="flex flex-wrap gap-4">
              {type === "hero" && <>

                <div className="grid h-full w-full grid-cols-4 gap-2 p-1">

                  <Button key={99} className="col-span-2 h-16" variant={curEffectIndex === 0 ? "default" : "outline"} onClick={
                    () => {
                      setCurEffectIndex(0);
                    }
                  }>
                    <div className="effect">
                      <HealthImg />
                      <div className="effect__name">Základní životy</div>
                    </div>
                  </Button>

                  <Button key={100} className="col-span-2 h-16" variant={curEffectIndex === 1 ? "default" : "outline"} onClick={
                    () => {
                      setCurEffectIndex(1);
                    }
                  }>
                    <div className="effect">
                      <HealthImg />
                      <div className="effect__name">Týmové životy</div>
                    </div>
                  </Button>

                  {["Ráno", "Poledne", "Večer", "Noc"].map((value, index) => {
                    return (
                      <Button className='h-16' variant={(index + 2) === curEffectIndex ? "default" : "outline"} key={index} onClick={
                        () => {
                          setCurEffectIndex(index + 2);
                        }
                      }>
                        <div key={index} className="effect">
                          <DaytimeImg time={index} />
                          <EffectImg effect={"add-energy"} />
                          <div className="effect__name">{value}</div>
                        </div>
                      </Button>
                    )
                  })}


                  {
                    [
                      typeData.effects[0],
                      typeData.effects[2],
                      typeData.effects[4],
                      typeData.effects[6],
                      typeData.effects[1],
                      typeData.effects[3],
                      typeData.effects[5],
                      typeData.effects[7],
                    ].map((effect, index) => {
                      effect = effect as effectName | null;
                      if (effect === null) return (
                        <Button variant="outline" key={index} disabled className='h-16'>
                          <div key={index} className="effect">
                          </div>
                        </Button>
                      );

                      let newIndex = index + 6;

                      return (

                        <Button className='h-16' variant={newIndex === curEffectIndex ? "default" : "outline"} key={index} onClick={
                          () => {
                            setCurEffectIndex(newIndex);
                          }
                        }>
                          <div key={index} className="effect">
                            <EffectImg effect={effect} />
                          </div>
                        </Button>

                      )

                    })}

                </div>
              </>}

              {
                type === "weapon" && <>

                  <div className="grid h-full w-full grid-cols-10 gap-2 p-1">


                    <Button className="col-span-2 h-16" variant={(0) === curEffectIndex ? "default" : "outline"} key={0} onClick={
                      () => {
                        setCurEffectIndex(0);
                      }
                    }>
                      <div key={0} className="effect">
                        <EffectImg effect={"heal"} />
                        <div className="effect__name">Odolnost</div>
                      </div>
                    </Button>

                    {
                      typeData.effects.map((effect, index) => {
                        effect = effect as weaponTypeEffect | null;
                        if (effect === null) return (
                          <Button variant="outline" key={index} disabled className="col-span-2 h-16">
                            <div key={index} className="effect">
                              <div className="effect__name">N/A</div>
                            </div>
                          </Button>
                        );

                        let newIndex = index + 1;

                        if (!effect) return (
                          <Button variant="outline" key={index} disabled className="col-span-2 h-16">
                            <div key={index} className="effect">
                              <div className="effect__name">N/A</div>
                            </div>
                          </Button>
                        );

                        return (

                          <Button className="col-span-2 h-16" variant={newIndex === curEffectIndex ? "default" : "outline"} key={index} onClick={
                            () => {
                              setCurEffectIndex(newIndex);
                            }
                          }>
                            <div key={index} className="effect">
                              <EffectImg effect={effect.t} color={effect.f} />
                            </div>
                          </Button>

                        )

                      })}

                    <Button className="col-span-5" variant={isDurability === false ? "default" : "outline"} key={typeData.effects.length + 1} onClick={
                      () => {
                        setIsDurability(false);
                      }
                    }>
                      <div key="isDurTrue" className="effect">
                        Hodnota efektu
                      </div>
                    </Button>

                    <Button
                      className="col-span-5"
                      variant={isDurability === true ? "default" : "outline"}
                      key={typeData.effects.length + 2}
                      onClick={() => {
                        setIsDurability(true);
                      }}
                      disabled={!hasDurability}
                    >
                      <div key="isDurFalse" className="effect">
                        Odolnost efektu
                      </div>
                    </Button>

                  </div>
                </>
              }
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Rozložení efektu</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center rounded-lg">
                <EffectGraph data={bonusCountsChartData as (string | number)[][]} />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Hodnota</TableHead>
                    <TableHead>Počet na SWO</TableHead>
                    <TableHead>Celkem karet*</TableHead>
                    <TableHead>Šance na setření*</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(isDurability && type === "weapon" ? (data as weaponEffectStats).dur : data.physical).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell>{key}</TableCell>
                      <TableCell title={(value / cardCount * 100) + "%"}>{value}</TableCell>
                      <TableCell>{Math.round((value / cardCount) * typeCount)}</TableCell>
                      <TableCell title={(value / islandCards * 100).toString()}>{(value / islandCards * 100).toFixed(6)}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              *Přibližné hodnoty na základě vypovídajícího vzorku naskenovaných karet ze SWO
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
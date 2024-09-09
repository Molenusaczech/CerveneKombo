"use client";

/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/nUzLr3Z9qlN
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import { LineChart } from "recharts"
import { Button } from "@/components/ui/button"
import { cardStats } from "@/types/cardStats";
import Card from "../card";
import { Skeleton } from "@mui/material";
import HeroSkeleton from "../heroSkeleton";
import effectValue from "@/tools/effectValue";
import BonusChart from "../crossStats/bonusChart";
import getTypeData from "@/tools/types/getTypeData";
import betterSameWorse from "@/tools/types/betterSameWorse";
import rarityCardCounts from "@/tools/types/rarityCountCard";
import Chart from "react-google-charts";
import { DeltaChart } from "../crossStats/deltaChart";
import { Ellipsis, EllipsisVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Badge } from "../ui/badge";
import { heroFromUid } from "@/types/heroFromUid";
import { weaponFromUid } from "@/types/weaponFromUid";
import { LookupLongCard, LookupSmallCard } from "../lookup/lookupCard";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function CardData(props: {
  data: cardStats | null,
  scan: heroFromUid | weaponFromUid | null;
}) {
  "use client";
  const data = props.data;
  const scan = props.scan;

  let screenWidth = 1080;

  useEffect(() => {
    if (typeof window !== undefined) {
      screenWidth = window.innerWidth;
    }
  }, [])

  const [isUpgraded, setIsUpgraded] = useState<Checked>(false)

  let card;

  if (data?.card) {
    card = data.card
  } else if (scan?.card) {
    card = scan.card
  }

  const stats = data;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          {data?.card && <Card
            data={isUpgraded ? scan?.upgradedCard : data.card}
            width={screenWidth < 400 ? screenWidth : 400}
          />}
          {!data?.card && <HeroSkeleton width={screenWidth < 400 ? screenWidth : 400} />}

        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">
              {card && card.name}
              {!card && <div>Načítání karty</div>}
            </h1>
            <div className="flex flex-row align-middle space-x-3">

              {stats !== null && stats.delta !== null && <Badge>
                {effectValue(stats.delta, false)}
              </Badge>}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <EllipsisVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {card && <DropdownMenuItem onClick={() => {
                    // Open image on another card
                    window.open("/image/" + card.cid + "/" + card.name, "_blank")
                  }}>Stáhnout obrázek</DropdownMenuItem>}
                  {scan?.upgradedCard && <>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={isUpgraded}
                      onCheckedChange={(val) => {
                        setIsUpgraded(val)
                      }}
                    >
                      Zobrazit vylepšenou kartu
                    </DropdownMenuCheckboxItem>
                  </>}
                </DropdownMenuContent>
              </DropdownMenu>

            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <LookupSmallCard title="Horších karet">
              <div className="text-2xl font-bold">{stats?.worse}</div>
            </LookupSmallCard>
            <LookupSmallCard title="Stejných karet">
              <div className="text-2xl font-bold">{stats?.same}</div>
            </LookupSmallCard>
            <LookupSmallCard title="Lepších karet">
              <div className="text-2xl font-bold">{stats?.better}</div>
            </LookupSmallCard>
          </div>
          {stats && <LookupLongCard
            title="Unikátní"
            rightTitle={stats.instances === 1 ? "Ano" : "Ne"}
          >
            {stats.instances === 1 ? <></> : <div className="text-2xl font-bold">{stats.instances + " instancí"}</div>}
          </LookupLongCard>}

          {scan?.owner && <LookupLongCard
            title="Vlastník karty"
            rightTitle=""
          >
            <div className="text-2xl font-bold">{scan.owner}</div>
          </LookupLongCard>}

          {stats && card && <LookupLongCard
            title="Rozložení průměrů"
            rightTitle=""
          >
            <DeltaChart cid={card.cid} delta={stats.delta} />
          </LookupLongCard>}

        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <h3 className="text-lg font-bold mb-2 text-center">Main HP</h3>

        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 text-center">Alternative HP</h3>
          <LineChart
            data={[{ value: 80 }, { value: 85 }, { value: 90 }, { value: 95 }, { value: 100 }]}
            className="min-h-[150px]"
          />
        </div>

      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h3 className="text-lg font-bold mb-2">Stat 1</h3>
          <LineChart
            data={[{ value: 10 }, { value: 12 }, { value: 14 }, { value: 16 }, { value: 18 }]}
            className="min-h-[150px]"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Stat 2</h3>
          <LineChart
            data={[{ value: 5 }, { value: 7 }, { value: 9 }, { value: 11 }, { value: 13 }]}
            className="min-h-[150px]"
          />
        </div>
      </div>
    </div>
  )
}
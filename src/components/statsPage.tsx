"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { BarChart, LineChart, PieChart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import cardStats from "@/data/cardStats";
import { islandChartData, islandName, starCounts } from "@/types/chartData"
import deltas from "@/data/deltas"
import Link from "next/link"
import IslandCountChart from "./charts/islandCountChart"
import HeroVsWeaponChart from "./charts/heroesVsWeaponsChart"
import StarChart from "./charts/starChart"
import { DeltaChart } from "./crossStats/deltaChart"
import GlobalDeltaChart from "./charts/deltaChart"

export function StatsPage() {
  "use client";
  const [selectedEdition, setSelectedEdition] = useState<islandName | "Všechny edice">("Všechny edice")
  const [searchTerm, setSearchTerm] = useState("")

  const curIsland: islandChartData = (selectedEdition === "Všechny edice") ? cardStats.globals : cardStats.islands[selectedEdition]

  const starData = [
    { starCount: 1, heroes: curIsland.stars.hero["1"], weapons: curIsland.stars.weapon["1"] },
    { starCount: 2, heroes: curIsland.stars.hero["2"], weapons: curIsland.stars.weapon["2"] },
    { starCount: 3, heroes: curIsland.stars.hero["3"], weapons: curIsland.stars.weapon["3"] },
    { starCount: 4, heroes: curIsland.stars.hero["4"], weapons: curIsland.stars.weapon["4"] },
  ]

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card className="bg-yellow-100 border-yellow-300">
        <CardContent className="p-4">
          <p className="text-yellow-800">
            Disclaimer: Tyto statistiky jsou založeny na základě dat získaných z API od NG. Jsou pouze orientační a nemusí být přesná. Nenesu žádnou zodpovědnost za tyhle statistiky.
            Obsahují pouze data z českých karet.
            Berte je jako orientační. <br></br>
            Procenta jsou pro přehlednost zaokrouhlena, pro přesné hodnoty najeděte na zaokrouhlenou hodnotu.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Počet karet podle edic</CardTitle>
          <CardDescription>Tento graf ukazuje počet hrdinů a zbraní rozdělené podle edic.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center mb-4">
            <IslandCountChart data={cardStats} />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button className="col-span-3" variant={selectedEdition === "Všechny edice" ? "default" : "outline"} onClick={() => setSelectedEdition("Všechny edice")}>
              Všechny edice
            </Button>
            {Object.keys(cardStats.islands).map((edition) => (
              <Button
                key={edition}
                variant={selectedEdition === edition ? "default" : "outline"}
                onClick={() => setSelectedEdition(edition as | "Všechny edice")}
              >
                {edition}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Hrdinové vs. Zbraně</CardTitle>
            <CardDescription>Porovnání počtu hrdinů a zbraní v aktuálně vybrané edici</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              
            
            <HeroVsWeaponChart heroes={curIsland.heroes} weapons={curIsland.weapons} />
              
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Hrdinové</TableHead>
                  <TableHead>Zbraně</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{curIsland.heroes}</TableCell>
                  <TableCell>{curIsland.weapons}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell title={(curIsland.heroes / (curIsland.heroes + curIsland.weapons) * 100) + "%"}>{(curIsland.heroes / (curIsland.heroes + curIsland.weapons) * 100).toFixed(3)}%</TableCell>
                  <TableCell title={(curIsland.weapons / (curIsland.heroes + curIsland.weapons) * 100) + "%"}>{(curIsland.weapons / (curIsland.heroes + curIsland.weapons) * 100).toFixed(3)}%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distrobuce podle hvězdiček</CardTitle>
            <CardDescription>Počky karet rozdělené podle hvězdiček (1*-4*)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center mb-4">
              <StarChart curIsland={curIsland} />
            </div>
            <Tabs defaultValue="heroes">
              <TabsList className="w-full grid grid-cols-2 gap-2">
                <TabsTrigger value="heroes">Hrdinové</TabsTrigger>
                <TabsTrigger value="weapons">Zbraně</TabsTrigger>
              </TabsList>
              <TabsContent value="heroes">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>1*</TableHead>
                      <TableHead>2*</TableHead>
                      <TableHead>3*</TableHead>
                      <TableHead>4*</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      {[1, 2, 3, 4].map((stars) => (
                        <TableCell key={stars}>{curIsland.stars.hero[stars as keyof starCounts]}</TableCell>
                      ))}
                    </TableRow>
                    <TableRow>
                      {[1, 2, 3, 4].map((stars) => (
                        <TableCell title={(curIsland.stars.hero[stars as keyof starCounts] / curIsland.heroes * 100) + "%"} key={stars}>{(curIsland.stars.hero[stars as keyof starCounts] / curIsland.heroes * 100).toFixed(3)}%</TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="weapons">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>1*</TableHead>
                      <TableHead>2*</TableHead>
                      <TableHead>3*</TableHead>
                      <TableHead>4*</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      {[1, 2, 3, 4].map((stars) => (
                        <TableCell key={stars}>{curIsland.stars.weapon[stars as keyof starCounts]}</TableCell>
                      ))}
                    </TableRow>
                    <TableRow>
                      {[1, 2, 3, 4].map((stars) => (
                        <TableCell title={(curIsland.stars.weapon[stars as keyof starCounts] / curIsland.weapons * 100) + "%"} key={stars}>{(curIsland.stars.weapon[stars as keyof starCounts] / curIsland.weapons * 100).toFixed(3)}%</TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rozložení podle průměrů</CardTitle>
          <CardDescription>
            Počty karet podle průměru a šance na jejich setření.
            Šance jsou zaokrouhleny na 3 desetinná místa, pro zobrazení přesné hodnoty najeděte na hodnotu.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center mb-4">
            <GlobalDeltaChart curIsland={curIsland} />
          </div>
          <Tabs defaultValue="heroes">
            <TabsList className="w-full grid grid-cols-2 gap-2">
              <TabsTrigger value="heroes">Hrdinové</TabsTrigger>
              <TabsTrigger value="weapons">Zbraně</TabsTrigger>
            </TabsList>
            <TabsContent value="heroes">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {deltas.map((delta) => (
                        <TableHead key={delta}>{delta}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      {deltas.map((delta) => (
                        <TableCell key={delta}>{curIsland.rarities.hero[delta]}</TableCell>
                      ))}
                    </TableRow>
                    <TableRow>
                      {deltas.map((delta) => (
                        <TableCell title={(curIsland.rarities.hero[delta] / curIsland.heroes * 100) + "%"} key={delta}>{(curIsland.rarities.hero[delta] / curIsland.heroes * 100).toFixed(3)}%</TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="weapons">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {deltas.map((delta) => (
                        <TableHead key={delta}>{delta}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      {deltas.map((delta) => (
                        <TableCell key={delta}>{curIsland.rarities.weapon[delta]}</TableCell>
                      ))}
                    </TableRow>
                    <TableRow>
                      {deltas.map((delta) => (
                        <TableCell title={(curIsland.rarities.weapon[delta] / curIsland.weapons * 100) + "%"} key={delta}>{(curIsland.rarities.weapon[delta] / curIsland.weapons * 100).toFixed(3)}%</TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Statistiky jednotlivých karet</CardTitle>
          <CardDescription>Počty jednotlivých karet podle průměru. () značí odvozené statistiky. ! znamená krajní hodnoty. Pro zobrazení procent najeďte na hodnotu. Pro zobrazení konkrétních informací ohledně typu, klikněte na jeho název.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            className="mb-4"
            placeholder="Vyhledejte kartu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="overflow-x-auto">
            {<Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Jméno karty</TableHead>
                  <TableHead>Počet</TableHead>
                  <TableHead>Podíl</TableHead>
                  {deltas.map((delta) => (
                    <TableHead key={delta}>{delta}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.values(cardStats.types)
                  .filter((card) => card.name.toLowerCase().includes(searchTerm.toLowerCase()) && (card.origin === selectedEdition || selectedEdition === "Všechny edice"))
                  .map((card) => (
                    <TableRow key={card.name}>
                      <TableCell>
                        <Link href={`/type/${card.cid}`} prefetch={false} className="text-blue-600 hover:underline">
                          {card.name}
                        </Link>
                      </TableCell>
                      <TableCell>{card.count}</TableCell>
                      <TableCell
                        title={(card.count / (card.type === "hero" ? curIsland.heroes : curIsland.weapons) * 100) + "%"}
                      >{(card.count / (card.type === "hero" ? curIsland.heroes : curIsland.weapons) * 100).toFixed(4)}%</TableCell>
                      {deltas.map((delta) => (
                        <TableCell 
                        key={delta}
                        title={(card.rarities[delta]?.val ? card.rarities[delta]?.val : 0) / (card.type === "hero" ? curIsland.heroes : curIsland.weapons) * 100 + "%"}
                        >
                          {card.rarities[delta]?.val ? (
                            <>
                              {card.rarities[delta]?.isDerived && !card.rarities[delta].isExact ? "<" : ""}
                              {card.rarities[delta]?.isDerived && card.rarities[delta].isExact && "("}{card.rarities[delta]?.val}{card.rarities[delta]?.isDerived && card.rarities[delta].isExact && ")"}
                              {card.rarities[delta]?.isLimit ? "!" : ""}
                            </>
                          ) : (
                            ''
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
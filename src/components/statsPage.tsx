"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { BarChart, LineChart, PieChart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import cardStats from "@/data/cardStats";
import { islandChartData, islandName } from "@/types/chartData"
import deltas from "@/data/deltas"

export function StatsPage() {
  "use client";
  const [selectedEdition, setSelectedEdition] = useState<islandName | "Všechny edice">("BioTech")
  const [searchTerm, setSearchTerm] = useState("")

  const curIsland: islandChartData = (selectedEdition === "Všechny edice") ? cardStats.globals : cardStats.islands[selectedEdition]

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold">Red Combo - Global Stats</h1>

      <Card className="bg-yellow-100 border-yellow-300">
        <CardContent className="p-4">
          <p className="text-yellow-800">
            Disclaimer: Tyto statistiky jsou založeny na základě dat získaných z API od NG. Jsou pouze orientační a nemusí být přesná. Nenesu žádnou zodpovědnost za tyhle statistiky.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Počet karet podle edic</CardTitle>
          <CardDescription>Tento graf ukazuje počet hrdinů a zbraní rozdělené podle edic.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-100 flex items-center justify-center mb-4">
            <BarChart className="w-16 h-16 text-gray-400" />
            <span className="ml-2 text-gray-500">Card Count Graph</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Všechny edice", ...Object.keys(cardStats.islands)].map((edition) => (
              <Button
                key={edition}
                variant={selectedEdition === edition ? "default" : "outline"}
                onClick={() => setSelectedEdition(edition as  | "Všechny edice")}
              >
                {edition}
              </Button>
            ))}
          </div>
          <div className="mt-4">
            <p>Selected Edition: {selectedEdition}</p>
            <p>Heroes: {curIsland.heroes}</p>
            <p>Weapons: {curIsland.weapons}</p>
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
            <div className="h-64 bg-gray-100 flex items-center justify-center">
              <PieChart className="w-16 h-16 text-gray-400" />
              <span className="ml-2 text-gray-500">Weapons vs Heroes Chart</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distrobuce podle hvězdiček</CardTitle>
            <CardDescription>Počky karet rozdělené podle hvězdiček (1*-4*)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-100 flex items-center justify-center mb-4">
              <BarChart className="w-16 h-16 text-gray-400" />
              <span className="ml-2 text-gray-500">Star Rating Chart</span>
            </div>
            <Tabs defaultValue="heroes">
              <TabsList className="w-full grid grid-cols-2 gap-2">
                <TabsTrigger value="heroes">Heroes</TabsTrigger>
                <TabsTrigger value="weapons">Weapons</TabsTrigger>
              </TabsList>
              <TabsContent value="heroes">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Star Rating</TableHead>
                      <TableHead>1*</TableHead>
                      <TableHead>2*</TableHead>
                      <TableHead>3*</TableHead>
                      <TableHead>4*</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Count</TableCell>
                      {[1, 2, 3, 4].map((stars) => (
                        <TableCell key={stars}>Test 123</TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="weapons">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Star Rating</TableHead>
                      <TableHead>1*</TableHead>
                      <TableHead>2*</TableHead>
                      <TableHead>3*</TableHead>
                      <TableHead>4*</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Count</TableCell>
                      {[1, 2, 3, 4].map((stars) => (
                        <TableCell key={stars}>Test 345</TableCell>
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
          <CardTitle>Delta Distribution</CardTitle>
          <CardDescription>Count and chance of cards by delta value (-9 to +9)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-100 flex items-center justify-center mb-4">
            <LineChart className="w-16 h-16 text-gray-400" />
            <span className="ml-2 text-gray-500">Delta Distribution Graph</span>
          </div>
          <Tabs defaultValue="heroes">
            <TabsList className="w-full grid grid-cols-2 gap-2">
              <TabsTrigger value="heroes">Heroes</TabsTrigger>
              <TabsTrigger value="weapons">Weapons</TabsTrigger>
            </TabsList>
            <TabsContent value="heroes">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {Object.keys(curIsland.rarities.hero).map((delta) => (
                        <TableHead key={delta}>{delta}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      {Object.entries(curIsland.rarities.hero).map(([ delta, count ]) => (
                        <TableCell key={delta}>{count}</TableCell>
                      ))}
                    </TableRow>
                    <TableRow>
                      {Object.entries(curIsland.rarities.hero).map(([ delta, count ]) => (
                        <TableCell key={delta}>{(count / curIsland.heroes * 100).toFixed(4)}%</TableCell>
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
                      <TableHead>Metric</TableHead>
                      {Object.keys(curIsland.rarities.weapon).map((delta) => (
                        <TableHead key={delta}>{delta}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Count</TableCell>
                      {Object.entries(curIsland.rarities.weapon).map(([ delta, count ]) => (
                        <TableCell key={delta}>{count}</TableCell>
                      ))}
                    </TableRow>
                    <TableRow>
                      <TableCell>Chance</TableCell>
                      {Object.entries(curIsland.rarities.weapon).map(([ delta, count ]) => (
                        <TableCell key={delta}>{(count / curIsland.weapons * 100).toFixed(4)}%</TableCell>
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
          <CardTitle>Card Details</CardTitle>
          <CardDescription>Comprehensive list of all card types and their statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            className="mb-4"
            placeholder="Search cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
              <div className="overflow-x-auto">
                {<Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Count</TableHead>
                      <TableHead>Chance</TableHead>
                      {deltas.map((delta) => (
                        <TableHead key={delta}>{delta}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.values(cardStats.types)
                      .filter((card) => card.name.toLowerCase().includes(searchTerm.toLowerCase()) && card.origin === selectedEdition)
                      .map((card) => (
                        <TableRow key={card.name}>
                          <TableCell>
                            <a href={`#${card.name}`} className="text-blue-600 hover:underline">
                              {card.name}
                            </a>
                          </TableCell>
                          <TableCell>{card.count}</TableCell>
                          <TableCell>{(card.count / (card.type === "hero" ? curIsland.heroes : curIsland.weapons) * 100).toFixed(4)}%</TableCell>
                          {deltas.map((delta) => (
                            <TableCell key={delta}>
                              {card.rarities[delta]?.val ? (
                                <>
                                  {card.rarities[delta].isDerived && !card.rarities[delta].isExact ? "<"  : ""}
                                  {card.rarities[delta].val} 
                                  {card.rarities[delta].isLimit ? "!" : ""}
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
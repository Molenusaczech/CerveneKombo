'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"

import Image from 'next/image';
import spectateLinkChecker from '@/tools/replay/spectateLinkChecker'

export function SwoReplayLookup() {
  const [replayLink, setReplayLink] = useState('')

  let isError = !spectateLinkChecker(replayLink) || replayLink === '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the submission,
    // such as sending the link to an API or processing it
    console.log('Submitted replay link:', replayLink)
    window.open(`/replay/${encodeURIComponent(replayLink)}`, '_blank')
  }

  const handleViewExample = () => {
    // This would typically open an example replay
    //window.open('/replay/http%3A%2F%2Fscratchwars-online.cz%2Fcs%2Fbattles%2F87720%2Fspectate%2Fb907c00ca48a4bb992b78c86bd24c39a%2F', '_blank')
    setReplayLink('http://scratchwars-online.cz/cs/battles/87720/spectate/b907c00ca48a4bb992b78c86bd24c39a/')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Přehrávač záznamů z SWO</h1>
      <p className="text-center text-muted-foreground mb-8">
        Tento nástroj umí zpětně přehrát již odehrané hry ze SWO. Některé akce mohou být zobrazeny špatně, protože zpětná data ze SWO nejsou úplně přesná. Toto se týká hlavně štítu a kumuláku
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mb-8">
        <div className="space-y-2">
          <Label htmlFor="replayLink">Divácký odkaz</Label>
          <Input
            id="replayLink"
            placeholder="Zde vlož divácký odkaz z SWO"
            value={replayLink}
            onChange={(e) => setReplayLink(e.target.value)}
            required
          />
        </div>
        <div className="flex space-x-2">
          <Button type="submit" className="flex-1" disabled={isError}>
            {isError ? "Neplatný odkaz" : "Přehrát hru"}
          </Button>
          <Button type="button" variant="outline" onClick={handleViewExample}>
            Příklad záznamu
          </Button>
        </div>
      </form>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Jak získat divácký odkaz?</CardTitle>
          <CardDescription>Následuj tyto jednoduché kroky</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Zkopíruj divácký odkaz ze SWO
              <Image src={"/replay/tutorial1.png"} alt="tutorial1" width={1920 / 2} height={953 / 2} />
            </li>
            <li>
              Vlož odkaz do této stránky a klikni na spustit záznam
            </li>
          </ol>
          <div className="flex items-center mt-4 p-4 bg-muted rounded-md">
            <AlertCircle className="h-20 w-20 mr-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Je potřeba kopírovat odkaz pomocí speciálního tlačítka, protože obsahuje kromě ID hry i speciální přístupový kód, který umožňuje Červenému Kombu hru zobrazit.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
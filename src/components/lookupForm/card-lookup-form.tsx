'use client'

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardCidSelect } from "./cardCidSelect"

import Link from "next/link"
import { redirect } from "next/navigation"
import { red } from "@mui/material/colors"

const types = [
  { value: "character", label: "Character" },
  { value: "event", label: "Event" },
  { value: "stage", label: "Stage" },
]

export function CardLookupForm() {
  "use client";
  const [value, setValue] = useState("")

  const [name, setName] = useState("")
  const [uid, setUid] = useState("")

  let buttonLink;

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <Tabs defaultValue="by-type" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="by-type">Podle jména</TabsTrigger>
          <TabsTrigger value="by-uid">Podle UID</TabsTrigger>
        </TabsList>
        <TabsContent value="by-type" className="space-y-4">
          <div className="space-y-2">
            <Label>Typ karty</Label>
            <CardCidSelect onSelect={setValue} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Jméno karty</Label>
            <Input
              id="name"
              placeholder="Gheorg Olanescu"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {name !== "" && value !== "" ?
            <Link className={buttonVariants({ variant: "default" }) + " w-full"} href={"/stats/" + value + "/" + name}>Vyhledat podle jména a druhu</Link>
            :
            <Button className="w-full" disabled>
              Vyplň druh a jméno karty
            </Button>
          }
          <div className="grid grid-cols-2 gap-4">
            <Link
              className={buttonVariants({ variant: "outline" }) + " w-full"}
              href={"/stats/VampPrince/Mole"}>

              Příklad hrdiny

            </Link>
            <Link
              className={buttonVariants({ variant: "outline" }) + " w-full"}
              href={"/stats/Bow_ElderDragon/LVXB"}>

              Příklad zbraně

            </Link>
          </div>
        </TabsContent>
        <TabsContent value="by-uid" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="uid">UID</Label>
            <Input
              id="uid"
              placeholder="UID karty (QR kód)"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
            />
          </div>
          {uid !== "" ?
            <Link className={buttonVariants({ variant: "default" }) + " w-full"} href={"/scan/" + uid}>Vyhledat</Link>
            :
            <Button className="w-full" disabled>
              Vyhledat podle UID
            </Button>
          }
          <div className="grid grid-cols-2 gap-4">
            <Link
              className={buttonVariants({ variant: "outline" }) + " w-full"}
              href={"/scan/ljf7NAesoSsHVYZ"}>

              Příklad hrdiny

            </Link>
            <Link
              className={buttonVariants({ variant: "outline" }) + " w-full"}
              href={"/scan/20Sp53Yyj7P8nuS"}>

              Příklad zbraně

            </Link>
          </div>
        </TabsContent>
      </Tabs>

    </div >
  )
}
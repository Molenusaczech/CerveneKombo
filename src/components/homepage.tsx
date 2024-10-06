'use client'

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Layers, BarChart2, Share2, Star, Github, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"

export function Homepage() {

  const { theme, setTheme } = useTheme()

  return (
    <div className="bg-gradient-to-b from-red-100 to-white dark:from-red-950 dark:to-gray-900">
      <header className="p-6 md:p-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-red-600 mb-4">Červené kombo</h1>
        <p className="text-xl md:text-2xl text-center mb-8 light:text-gray-700">
          Sada užitečných nástrojů pro hráče Scratch Wars
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <FeatureCard
            icon={<Search className="h-8 w-8 text-red-500" />}
            title="Vyhledávání karet"
            description="Najděte podle jména a typu nebo UID karty spoustu zajímavých informací a statistik o vaší konkrétní kartě."
            link="/lookup"
            buttonText="Vyhledat kartu"
          />
          <FeatureCard
            icon={<Camera className="h-8 w-8 text-red-500" />}
            title="SWO Replaye"
            description="Přehrajte si pomocí diváckého odkazu z SWO zpětně celý zápas a zjistěte, co bylo rozhodující."
            link="/replay"
            buttonText="Přehrát zápas"
          />
          <FeatureCard
            icon={<BarChart2 className="h-8 w-8 text-red-500" />}
            title="Statistiky druhů"
            description="Zjistěte veškeré statistiky o druzích karet jako například rozložení průměrů nebo rozsahy hodnot pro jednotlivé statistiky"
            link="/charts"
            buttonText="Zobrazit statistiky"
          />
          <FeatureCard
            icon={<Github className="h-8 w-8 text-red-500" />}
            title="Open source"
            description="Veškerý zdrojový kód je dostupný na GitHubu."
            link="https://github.com/Molenusaczech/CerveneKombo"
            buttonText="Přejít na GitHub"
          />
        </section>

        <Card className="rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-4">O Červeném Kombu</h2>
          <p className="mb-4 light:text-gray-700">
            Červené kombo je web pro milovníky karetní hry Scratch Wars a statistiky. Mým cílem je poskytnout důležité a zajímavé informace všem hráčům Scratch Wars. Ať už se Scratch Wars začínáte nebo hrajete úplně od začátku, tak na Červeném kombu najdete něco pro Vás.
          </p>
          <p className="mb-4 light:text-gray-700">
            Původně bylo červené kombo jen velice jednoduchá stránka na vyhledávání karet, kterou jsem vytvořil za jeden víkend z frustrace, že jsou některé informace o kartách velice složitě dostupné nebo dokonce kompletně nedostupné. Po vydání jeho první verze jsem dostal spoustu zpětné vazby a díky ní jsem přidal další užitečné funkce.
          </p>
          <p className=" light:text-gray-700">
            V současné době využijí červené kombo každý měsíc desítky uživatelů a doufám, že pomocí jejich zpětné vazby a nápadů uděláme Červené kombo ještě lepší. Pokud budete mít nějaký nápad na zlepšení stránky, nebojte se mi napsat.
          </p>
        </Card>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Co o Červeném kombu říkají ostatní?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Kulishka"
              role="Admin SW Discordu, Content Creator"
              image="/reviews/kulishka.png"
              quote="Mole přesně pochopil problémy mnoha členů komunity a vytvořil všestranný nástroj, který efektivně řeší hned několik problémů. O obnovení vyhledavače rarity karet prosilo mnoho hráčů. Mole vzal celou věc do svých rukou a vyřešil ji velmi dobře.
ČK nenabízí jen vhled do statistik, přichází i s nástroji, které mi při tvorbě obsahu na sociální sítě šetří čas a nabízí další možnosti - například replaye soubojů."
            />
            <TestimonialCard
              name="Sterakdary"
              role="Streamer, Autor knižní série Arila"
              image="/reviews/sterakdary.jpg"
              quote="Červené kombo používají jenom ti největší frajeři... nebo trapáci. Nevím co to je, ale hádám že je to to, co jsi chtěl slyšel."
              link="https://clips.twitch.tv/PrettyAthleticMartenDatBoi-R-vt7meqTotA9Ld7"
            />
            <TestimonialCard
              name="Samuelito"
              role="Hráč, 4. místo na App Majoru 2024"
              image="/reviews/samuelito.png"
              quote="Červene kombo odporúčam lebo je to unikatna stránka na zistenie informácii o všetkých kartách scratch wars.Je veľmi intuitívne a veľmi nápomocné pre každého hráč.Určite ho možem doporučiť každému z komunity hry."
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Připraven dozvědět se něco nového o svých kartách?</h2>
          <Link href="/lookup/">
            <Button className="bg-red-500 hover:bg-red-700 text-white">
              Vyhledat kartu
            </Button>
          </Link>
        </section>
      </main>

      <footer className="mt-16 py-6 light:bg-gray-100 text-center light:text-gray-600">
        <p>With ❤️ by Mole - Některé použité assety jsou majetkem společností Notre Game a Wormelen Group</p>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

function FeatureCard({ icon, title, description, link, buttonText }: FeatureCardProps) {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-col items-center">
        {icon}
        <CardTitle className="mt-4 text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-center">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={link} className="w-full">
          <Button variant="outline" className="w-full">
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  link?: string;
}

function TestimonialCard({
  name,
  role, image, quote, link }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex flex-col items-center">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <CardTitle className="mt-4 text-xl font-semibold">{name}</CardTitle>
        <p className="text-sm">{role}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-center">&quot;{quote}&quot;</p>
        {link && (
          <Link href={link}>
            <Button variant="outline" className="mt-4 w-full">
              Zobrazit podrobnosti
            </Button>
          </Link>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
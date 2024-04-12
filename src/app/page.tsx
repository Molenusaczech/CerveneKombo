import Image from "next/image";

import Card from "@/components/hero";
import { heroRarity } from "@/types/cardRarity";
import Link from "next/link";

import UidForm from "@/components/uidForm";
import StatsForm from "@/components/statsForm";

export default function Page() {
  return (
    <div>
      {/*<h1> Home </h1>
      <h1> Home </h1>
  <h1> Home </h1>*/}
      <div className="grid grid-cols-2 gap-2">
        <UidForm />

        <StatsForm />

        <p className="col-span-2"> Tato stránka je v BETA verzi, všechno nemusí fungovat stoprocentně. Pokud narazíte na nějakou chybu, prosím kontaktujte mě. Problému s vyhledání podle jména u karet: Bojový Ferda, Hvězdná inženýrka jsem si vědom. Použité assety jsou majetkem společností Notre Game a Wormelen Group</p>
      </div>
    </div>
  )
}
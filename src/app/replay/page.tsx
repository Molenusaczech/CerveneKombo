import Image from "next/image";

import Card from "@/components/hero";
import { heroRarity } from "@/types/cardRarity";
import Link from "next/link";

import UidForm from "@/components/uidForm";
import StatsForm from "@/components/statsForm";
import ReplayForm from "@/components/replay/replayForm";

export default function Page() {
  return (
    <div className="grid grid-cols-2 p-1">
      <div className="p-1">
        <h1>Přehrávač záznamů z SWO</h1>
        Tento nástroj umí zpětně přehrát již odehrané hry ze SWO. Některé akce mohou být zobrazeny špatně, protože zpětná data ze SWO nejsou úplně přesná. Toto se týká hlavně štítu a kumuláku
        <ReplayForm />
      </div>
      <div className="p-1">
        <h1>Jak používat?</h1>

        <div>1. Zkopíruj divácký odkaz ze SWO
          <Image src={"/replay/tutorial1.png"} alt="tutorial1" width={1920 / 2} height={953 / 2} />
        </div>
        2. Vlož odkaz do této stránky a klikni na spustit záznam
      </div>
    </div>
  )
}
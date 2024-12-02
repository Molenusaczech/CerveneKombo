import Image from "next/image";

import Card from "@/components/hero";
import { heroRarity } from "@/types/cardRarity";
import Link from "next/link";

import UidForm from "@/components/uidForm";
import StatsForm from "@/components/statsForm";
import { TypographyH1 } from "@/components/typography";
import { Homepage } from "@/components/homepage";

export default function Page() {
  return (
    <div>
      <Homepage />
    </div>
  )
}
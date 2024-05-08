import Image from "next/image";

import Card from "@/components/hero";
import { heroRarity } from "@/types/cardRarity";
import Link from "next/link";

import UidForm from "@/components/uidForm";
import StatsForm from "@/components/statsForm";
import ReplayForm from "@/components/replay/replayForm";

export default function Page() {
  return (
    <div>
        Replay viewer
        <ReplayForm />
    </div>
  )
}
import Image from "next/image";

import Card from "@/components/hero";
import { heroRarity } from "@/types/cardRarity";
import Link from "next/link";

import UidForm from "@/components/uidForm";
import StatsForm from "@/components/statsForm";
import ReplayForm from "@/components/replay/replayForm";
import { SwoReplayLookup } from "@/components/swo-replay-lookup";

export default function Page() {
  return (
    <SwoReplayLookup />
  )
}
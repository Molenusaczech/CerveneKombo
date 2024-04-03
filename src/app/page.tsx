import Image from "next/image";

import Card from "@/components/card";
import { heroRarity } from "@/types/cardRarity";
import Link from "next/link";

import UidForm from "@/components/uidForm";

export default function Page() {
  return (
    <div>
      {/*<h1> Home </h1>
      <h1> Home </h1>
  <h1> Home </h1>*/}
      <UidForm />
      <Link href="/scan/k6Q23TmaGYSRSr9">scan</Link>
    </div>
  )
}
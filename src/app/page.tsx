import Image from "next/image";

import Card from "@/components/card";
import { heroRarity } from "@/types/cardRarity";
import Link from "next/link";

export default function Page() {

  let exampleData: heroRarity = {
    name: "Mole",
    cid: "VampPrince",
    isFoil: true,
    primaryHealth: 99,
    secondaryHealth: 6,
    energy: [
      {
        value: 4,
        isUpgraded: false
      },
      {
        value: 3,
        isUpgraded: false
      },
      {
        value: 3,
        isUpgraded: false
      },
      {
        value: 4,
        isUpgraded: false
      }
    ],
    bonuses: [
      {
        value: 2,
        isUpgraded: false
      },
      {
        value: 2,
        isUpgraded: false
      },
      {
        value: 3,
        isUpgraded: false
      },
      {
        value: 3,
        isUpgraded: false
      },
      {
        value: 2,
        isUpgraded: false
      },
      {
        value: 2,
        isUpgraded: false
      },
      {
        value: 2,
        isUpgraded: false
      },
      {
        value: 5,
        isUpgraded: false
      },
    ],
  }

  let exampleData2: heroRarity = {
    name: "Example2",
    cid: "Pollux",
    isFoil: false,
    primaryHealth: 69,
    secondaryHealth: 6,
    energy: [
      {
        value: 4,
        isUpgraded: false
      },
      {
        value: 3,
        isUpgraded: false
      },
      {
        value: 3,
        isUpgraded: false
      },
      {
        value: 4,
        isUpgraded: false
      }
    ],
    bonuses: [
      {
        value: 2,
        isUpgraded: false
      },
      {
        value: 2,
        isUpgraded: false
      },
      {
        value: 3,
        isUpgraded: false
      },
      {
        value: 3,
        isUpgraded: false
      },
      {
        value: 2,
        isUpgraded: false
      },
      {
        value: 2,
        isUpgraded: false
      }
    ]
  }

  return (
    <div>
      {/*<h1> Home </h1>
      <h1> Home </h1>
  <h1> Home </h1>*/}
      <Card data={exampleData} width={320}/>
      <Card data={exampleData2} width={320}/>
      <Link href="/scan/k6Q23TmaGYSRSr9">scan</Link>
    </div>
  )
}
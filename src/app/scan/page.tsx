import Image from "next/image";

import Card from "@/components/card";
import { heroRarity } from "@/types/cardRarity";

export default function Scan() {

  let exampleData: heroRarity = {
    name: "Example",
    cid: "VampPrince",
    isFoil: false,
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
        value: 0,
        isUpgraded: false
      },
      {
        value: 0,
        isUpgraded: false
      },
      {
        value: 0,
        isUpgraded: false
      },
      {
        value: 0,
        isUpgraded: false
      },
      {
        value: 0,
        isUpgraded: false
      },
      {
        value: 0,
        isUpgraded: false
      },
      {
        value: 0,
        isUpgraded: false
      },
      {
        value: 0,
        isUpgraded: false
      },
    ],
  }

  return (
    <div>
      {/*<h1> Home </h1>
      <h1> Home </h1>
  <h1> Home </h1>*/}
  <h1> Home </h1>
      <Card data={exampleData} />
    </div>
  )
}

import Image from "next/image";

import WeaponCard from "@/components/weapon";

import { weaponRarity } from "@/types/weaponRarity";

export default async function Weapon() {

    let sampleData: weaponRarity = {
        iid: "gjghjgjgjg",
        cid: "Bow_ElderDragon",
        name: "ABCD",
        durability: 3,
        effects: [
            {
                value: 1,
                isUpgraded: false,
                durability: 1,
            },
            {
                value: 1,
                isUpgraded: false,
                durability: 1,
            },
            {
                value: 1,
                isUpgraded: false,
                durability: 1,
            },
            {
                value: 1,
                isUpgraded: false,
                durability: 1,
            },
            {
                value: 1,
                isUpgraded: false,
                durability: 1,
            },
            {
                value: 1,
                isUpgraded: false,
                durability: 1,
            },
            {
                value: 1,
                isUpgraded: false,
                durability: 1,
            },
            {
                value: 1,
                isUpgraded: false,
                durability: 1,
            },
            {
                value: 1,
                isUpgraded: false,
                durability: 1,
            },
            
        ]
    }
  return (
    <div>

    <WeaponCard data={sampleData} width={640} />

      {/*JSON.stringify(data)*/}

    </div>
  )
}

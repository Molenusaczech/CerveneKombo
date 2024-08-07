import { heroRarity } from "@/types/cardRarity";
import HeroCard from "@/components/hero";

import { weaponRarity } from "@/types/weaponRarity";
import WeaponCard from "@/components/weapon";

export default function Card(props: {
    data: heroRarity | weaponRarity | undefined,
    height?: number,
    width?: number,
    gray?: boolean,
    useImg?: boolean,
    imgRootLink?: string,
    cropped?: boolean
}) {

    if (props.data == undefined) return (<></>);

    if (props.data.t == "hero") {
        return <HeroCard
            data={props.data}
            height={props.height}
            width={props.width}
            gray={props.gray}
            useImg={props.useImg}
            imgRootLink={props.imgRootLink}
        />
    } else {
        return <WeaponCard
            data={props.data}
            height={props.height}
            width={props.width}
            gray={props.gray}
            useImg={props.useImg}
            imgRootLink={props.imgRootLink}
            cropped={props.cropped}
        />
    }
}

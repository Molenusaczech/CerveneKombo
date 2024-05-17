"use strict";
import Image from "next/image";

type labelSize = "small" | "medium" | "large";

import { weaponRarity } from "@/types/weaponRarity";

import { weaponCid, weaponTypeData } from "@/data/weaponTypeData";
import { hasDurability } from "@/tools/hasDurability";

function Label(props: {
    value: number | string,
    x: number,
    y: number,
    size: labelSize | "extraSmall",
    isUpgraded?: boolean,
    scale: number,
    rotation?: number,
    font?: string
}) {

    if (props.value == null) return (<></>);

    if (typeof props.value == "number" && isNaN(props.value)) return (<></>);

    //console.log(props.value);

    let isUpgraded = props.isUpgraded ?? false;
    let x = (props.x) * props.scale;
    let y = (props.y) * props.scale;
    let scale = props.scale;
    let rotation = props.rotation ?? 0;
    let font = props.font ?? "ScratchChizz";

    let value = props.value + "";

    let transform = "translate(0%, 0%)";
    let rotationTransform = "rotate(" + rotation + "deg)";

    let pxSize = 0;

    switch (props.size) {
        case "small":
            pxSize = 36 * scale;
            break;
        case "medium":
            pxSize = 44 * scale;
            break;
        case "extraSmall":
            pxSize = 16 * scale;
            break;
    }

    let color = "#000000";

    if (isUpgraded) color = "#15489c"

    return (
        <span style={
            {
                position: "absolute",
                left: x + "px",
                top: y + "px",
                color: color,
                fontSize: pxSize + "px",
                fontFamily: font,
                transform: transform + " " + rotationTransform,
            }
        }
        >{value}</span>
    )
}

// Positioning based of https://gitlab.com/OndrejSkalicka/scratch-wars-online/-/blob/master/swo/render/weapon.py

export default function WeaponCard(props: { 
    data: weaponRarity | undefined, 
    width?: number, 
    height?: number,
    gray?: boolean
}) {

    if (props.data == undefined) return (<></>);

    let type = weaponTypeData[props.data.cid];

    let bonuses = props.data.effects;

    const gray = props.gray ?? false;

    let scale = 1;

    if (props.width) scale = props.width / 640;

    if (props.height) scale = props.height / 735;

    if (props.width && props.height) throw new Error("You can't set both width and height")

    return (
        <div style={
            {
                position: "relative",
                width: 640 * scale + "px",
                height: 735 * scale + "px",
            }
        }>


            <Image
                src={type.imgUrl}
                alt={props.data.name + " card"}
                width={640 * scale}
                height={735 * scale}
                priority
                style={{
                    filter: gray ? "grayscale(75%)" : "none"
                }}
            />

            {/*Main Nums*/}

            {bonuses[0] && <Label 
                value={bonuses[0].value} 
                x={291} 
                y={232} 
                size="small" 
                isUpgraded={bonuses[0].isUpgraded} 
                scale={scale}
                rotation={350}
            />}

            {bonuses[8] && <Label
                value={bonuses[8].value}
                x={407}
                y={243}
                size="medium"
                isUpgraded={bonuses[8].isUpgraded}
                scale={scale}
                rotation={30}
            />}

            {bonuses[7] && <Label
                value={bonuses[7].value}
                x={486}
                y={344}
                size="medium"
                isUpgraded={bonuses[7].isUpgraded}
                scale={scale}
                rotation={70}
            />}

            {bonuses[6] && <Label
                value={bonuses[6].value}
                x={473}
                y={464}
                size="medium"
                isUpgraded={bonuses[6].isUpgraded}
                scale={scale}
                rotation={110}
            />}

            {bonuses[5] && <Label
                value={bonuses[5].value}
                x={395}
                y={559}
                size="medium"
                isUpgraded={bonuses[5].isUpgraded}
                scale={scale}
                rotation={150}
            />}

            {bonuses[4] && <Label
                value={bonuses[4].value}
                x={262}
                y={576}
                size="medium"
                isUpgraded={bonuses[4].isUpgraded}
                scale={scale}
                rotation={190}
            />}

            {bonuses[3] && <Label
                value={bonuses[3].value}
                x={165}
                y={509}
                size="medium"
                isUpgraded={bonuses[3].isUpgraded}
                scale={scale}
                rotation={230}
            />}

            {bonuses[2] && <Label
                value={bonuses[2].value}
                x={123}
                y={389}
                size="medium"
                isUpgraded={bonuses[2].isUpgraded}
                scale={scale}
                rotation={270}
            />}

            {bonuses[1] && <Label
                value={bonuses[1].value}
                x={165}
                y={276}
                size="medium"
                isUpgraded={bonuses[1].isUpgraded}
                scale={scale}
                rotation={310}
            />}

            {/* Durs */}

            {bonuses[7].durability && hasDurability(type.effects[7].t) && <Label
                value={bonuses[7].durability}
                x={555}
                y={366}
                size="small"
                isUpgraded={false}
                scale={scale}
                rotation={80}
            />}

            {bonuses[6].durability && hasDurability(type.effects[6].t) && <Label
                value={bonuses[6].durability}
                x={520}
                y={524}
                size="small"
                isUpgraded={false}
                scale={scale}
                rotation={120}
            />}

            {bonuses[5].durability && hasDurability(type.effects[5].t) && <Label
                value={bonuses[5].durability}
                x={390}
                y={629}
                size="small"
                isUpgraded={false}
                scale={scale}
                rotation={160}
            />}

            {bonuses[4].durability && hasDurability(type.effects[4].t) &&  <Label
                value={bonuses[4].durability}
                x={224}
                y={626}
                size="small"
                isUpgraded={false}
                scale={scale}
                rotation={200}
            />}

            {bonuses[3].durability && hasDurability(type.effects[3].t) && <Label
                value={bonuses[3].durability}
                x={100}
                y={521}
                size="small"
                isUpgraded={false}
                scale={scale}
                rotation={240}
            />}

            {bonuses[2].durability && hasDurability(type.effects[2].t) && <Label
                value={bonuses[2].durability}
                x={70}
                y={356}
                size="small"
                isUpgraded={false}
                scale={scale}
                rotation={280}
            />}


            {/* weapon durability */}

            <Label
                value={props.data.durability}
                x={470}
                y={205}
                size="small"
                scale={scale}
            />

            {/* weapon name */}

            <Label
                value={props.data.name}
                x={133}
                y={224}
                size="extraSmall"
                scale={scale}
                font="Roboto"
                rotation={30}
            />

        </div>
    )
}
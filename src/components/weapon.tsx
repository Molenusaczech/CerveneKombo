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
    gray?: boolean,
    useImg?: boolean,
    imgRootLink?: string,
    xOff?: number,
    yOff?: number
}) {

    if (props.data == undefined) return (<></>);

    let type = weaponTypeData[props.data.cid];

    let bonuses = props.data.effects;

    const gray = props.gray ?? false;

    let scale = 1;

    if (props.width) scale = props.width / 640;

    if (props.height) scale = props.height / 735;

    if (props.width && props.height) throw new Error("You can't set both width and height")

    const xOff = props.xOff ?? 0;
    const yOff = props.yOff ?? 0;

    return (
        <div style={
            {
                position: "relative",
                width: 640 * scale + "px",
                height: 735 * scale + "px",
                display: "flex"
            }
        }>


            {props.useImg ? <img
                src={props.imgRootLink + type.imgUrl}
                alt={props.data.name + " card"}
                width={640 * scale}
                height={735 * scale}
                style={{
                    filter: gray ? "grayscale(75%)" : "none"
                }}
            /> : <Image
                src={type.imgUrl}
                alt={props.data.name + " card"}
                width={640 * scale}
                height={735 * scale}
                priority
                style={{
                    filter: gray ? "grayscale(75%)" : "none"
                }}
            />}

            {/*Main Nums*/}

            {bonuses[0] && <Label
                value={bonuses[0].value}
                x={xOff+291}
                y={yOff+232}
                size="small"
                isUpgraded={bonuses[0].isUpgraded}
                scale={scale}
                rotation={350}
            />}

            {bonuses[8] && <Label
                value={bonuses[8].value}
                x={xOff+407}
                y={yOff+243}
                size="medium"
                isUpgraded={bonuses[8].isUpgraded}
                scale={scale}
                rotation={30}
            />}

            {bonuses[7] && <Label
                value={bonuses[7].value}
                x={xOff+486}
                y={yOff+344}
                size="medium"
                isUpgraded={bonuses[7].isUpgraded}
                scale={scale}
                rotation={70}
            />}

            {bonuses[6] && <Label
                value={bonuses[6].value}
                x={xOff+473}
                y={yOff+464}
                size="medium"
                isUpgraded={bonuses[6].isUpgraded}
                scale={scale}
                rotation={110}
            />}

            {bonuses[5] && <Label
                value={bonuses[5].value}
                x={xOff+395}
                y={yOff+559}
                size="medium"
                isUpgraded={bonuses[5].isUpgraded}
                scale={scale}
                rotation={150}
            />}

            {bonuses[4] && <Label
                value={bonuses[4].value}
                x={xOff+262}
                y={yOff+576}
                size="medium"
                isUpgraded={bonuses[4].isUpgraded}
                scale={scale}
                rotation={190}
            />}

            {bonuses[3] && <Label
                value={bonuses[3].value}
                x={xOff+165}
                y={yOff+509}
                size="medium"
                isUpgraded={bonuses[3].isUpgraded}
                scale={scale}
                rotation={230}
            />}

            {bonuses[2] && <Label
                value={bonuses[2].value}
                x={xOff+123}
                y={yOff+389}
                size="medium"
                isUpgraded={bonuses[2].isUpgraded}
                scale={scale}
                rotation={270}
            />}

            {bonuses[1] && <Label
                value={bonuses[1].value}
                x={xOff+165}
                y={yOff+276}
                size="medium"
                isUpgraded={bonuses[1].isUpgraded}
                scale={scale}
                rotation={310}
            />}

            {/* Durs */}

            {bonuses[7].durability && hasDurability(type.effects[7].t) && <Label
                value={bonuses[7].durability}
                x={xOff+555}
                y={yOff+366}
                size="small"
                isUpgraded={false}
                scale={scale}
                rotation={80}
            />}

            {bonuses[6].durability && hasDurability(type.effects[6].t) && <Label
                value={bonuses[6].durability}
                x={xOff+520}
                y={yOff+524}
                size="small"
                isUpgraded={false}
                scale={scale}
                rotation={120}
            />}

            {bonuses[5].durability && hasDurability(type.effects[5].t) && <Label
                value={bonuses[5].durability}
                x={xOff+390}
                y={yOff+629}
                size="small"
                isUpgraded={false}
                scale={scale}
                rotation={160}
            />}

            {bonuses[4].durability && hasDurability(type.effects[4].t) && <Label
                value={bonuses[4].durability}
                x={xOff+224}
                y={yOff+626}
                size="small"
                isUpgraded={false}
                scale={scale}
                rotation={200}
            />}

            {bonuses[3].durability && hasDurability(type.effects[3].t) && <Label
                value={bonuses[3].durability}
                x={xOff+100}
                y={yOff+521}
                size="small"
                isUpgraded={false}
                scale={scale}
                rotation={240}
            />}

            {bonuses[2].durability && hasDurability(type.effects[2].t) && <Label
                value={bonuses[2].durability}
                x={xOff+70}
                y={yOff+356}
                size="small"
                isUpgraded={false}
                scale={scale}
                rotation={280}
            />}


            {/* weapon durability */}

            <Label
                value={props.data.durability}
                x={xOff+470}
                y={yOff+205}
                size="small"
                scale={scale}
            />

            {/* weapon name */}

            <Label
                value={props.data.name}
                x={xOff+133}
                y={yOff+224}
                size="extraSmall"
                scale={scale}
                font="Roboto"
                rotation={30}
            />

        </div>
    )
}
"use strict";
import Image from "next/image";

type labelSize = "small" | "medium" | "large";

import { heroRarity } from "@/types/cardRarity";
import { heroTypeData } from "@/data/heroTypeData";
import { heroCardType } from "@/types/heroType";
import ShowIf from "./show";
import { parseBonuses } from "@/tools/bonusParse";
import { isInverted } from "@/tools/isInverted";

import effectValue from "@/tools/effectValue";

function Label(props: {
    value: number | string,
    x: number,
    y: number,
    size: labelSize,
    isInverted?: boolean,
    isUpgraded?: boolean,
    isNoOperator?: boolean
    isCentered?: boolean,
    scale: number
}) {

    if (props.value == null) return (<></>);

    if (typeof props.value == "number" && isNaN(props.value)) return (<></>);

    //console.log(props.value);

    let isInverted = props.isInverted ?? false;
    let isUpgraded = props.isUpgraded ?? false;
    let isNoOperator = props.isNoOperator ?? false;
    let isCentered = props.isCentered ?? false;
    let x = props.x;
    let y = props.y;
    let scale = props.scale;

    if (isInverted) x += 54 * scale;

    let value = props.value + "";

    if (!isNoOperator && typeof props.value == "number") {
        value = effectValue(props.value, isInverted);
    }

    let transform = "translate(0%, 0%)";

    if (isCentered) {
        transform = "translate(-50%, 0%)";
    }


    let pxSize = 0;

    switch (props.size) {
        case "small":
            pxSize = 36 * scale;
            break;
        case "medium":
            pxSize = 44 * scale;
            break;
        case "large":
            pxSize = 40 * scale;
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
                fontFamily: "ScratchChizz",
                transform: transform,
            }
        }
        >{value}</span>
    )
}

// Positioning based of https://gitlab.com/OndrejSkalicka/scratch-wars-online/-/blob/master/swo/render/hero.py?ref_type=heads

export default function HeroCard(props: {
    data: heroRarity | undefined,
    width?: number,
    height?: number
    gray?: boolean
}) {

    if (props.data == undefined) return (<></>);

    let type: heroCardType = heroTypeData[props.data.cid] as heroCardType;

    if (props.data.energy.length != 4) throw new Error("data.energy must have exactly four elements")

    //if (props.data.bonuses.length != effectCounts) throw new Error("data.bonuses of hero " + props.data.cid + " must have exactly " + effectCounts + " elements")

    //let bonuses = parseBonuses(props.data.bonuses, type.effects);
    let bonuses = props.data.bonuses;

    //console.log(props.data.bonuses);
    //console.log(bonuses[6]);

    //console.log(type.effects);
    //console.log(isInverted("night-attack"));

    let scale = 1;

    if (props.width) scale = props.width / 640;

    if (props.height) scale = props.height / 894;

    if (props.width && props.height) throw new Error("You can't set both width and height")

    const gray = props.gray ?? false;

    return (
        <div style={
            {
                position: "relative",
                width: 640 * scale + "px",
                height: 894 * scale + "px",
            }
        }>


            <Image
                src={type.imgUrl}
                alt={props.data.name + " card"}
                width={640 * scale}
                height={894 * scale}
                priority
                style={{
                    filter: gray ? "grayscale(100%)" : "none"
                }}
            />

            {props.data.isFoil &&
                <Image
                    src="/foil.png"
                    alt="Foil"
                    width={640 * scale}
                    height={894 * scale}
                    unoptimized
                    style={
                        {
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                        }
                    }
                />}

            {/* Name */}
            <Label
                size={"large"}
                value={props.data.name}
                x={315 * scale}
                y={23 * scale}
                isCentered
                scale={scale}
            />

            {/* 1. Phase */}
            <Label
                size={"small"}
                value={props.data.energy[0].value}
                x={84 * scale}
                y={634 * scale}
                isUpgraded={props.data.energy[0].isUpgraded}
                scale={scale}
            />
            {bonuses[0] && <Label
                size={"medium"}
                value={bonuses[0].value}
                x={68 * scale}
                y={685 * scale}
                isInverted={isInverted(type.effects[0])}
                isUpgraded={bonuses[0].isUpgraded}
                scale={scale}
            />}
            {bonuses[1] && type.effects[1] != null && (
                <Label
                    size={"medium"}
                    value={bonuses[1].value}
                    x={68 * scale}
                    y={746 * scale}
                    isInverted={isInverted(type.effects[1])}
                    isUpgraded={bonuses[1].isUpgraded}
                    scale={scale}
                />
            )}

            {/* 2. Phase */}
            <Label
                size={"small"}
                value={props.data.energy[1].value}
                x={223 * scale}
                y={626 * scale}
                isUpgraded={props.data.energy[1].isUpgraded}
                scale={scale}
            />
            {bonuses[2] && <Label
                size={"medium"}
                value={bonuses[2].value}
                x={206 * scale}
                y={675 * scale}
                isInverted={isInverted(type.effects[2])}
                isUpgraded={bonuses[2].isUpgraded}
                scale={scale}
            />}

            {bonuses[3] && type.effects[3] != null && <Label
                size={"medium"}
                value={bonuses[3].value}
                x={206 * scale}
                y={739 * scale}
                isInverted={isInverted(type.effects[3])}
                isUpgraded={bonuses[3].isUpgraded}
                scale={scale}
            />}


            {/* 3. Phase */}
            <Label
                size={"small"}
                value={props.data.energy[2].value}
                x={363 * scale}
                y={637 * scale}
                isUpgraded={props.data.energy[2].isUpgraded}
                scale={scale}
            />
            {bonuses[4] && <Label
                size={"medium"}
                value={bonuses[4].value}
                x={348 * scale}
                y={686 * scale}
                isUpgraded={bonuses[4].isUpgraded}
                isInverted={isInverted(type.effects[4])}
                scale={scale}
            />}

            {bonuses[5] && type.effects[5] != null && <Label
                size={"medium"}
                value={bonuses[5].value}
                x={348 * scale}
                y={747 * scale}
                isInverted={isInverted(type.effects[5])}
                isUpgraded={bonuses[5].isUpgraded}
                scale={scale}
            />}

            {/* 4. Phase */}
            <Label
                size={"small"}
                value={props.data.energy[3].value}
                x={503 * scale}
                y={627 * scale}
                isUpgraded={props.data.energy[3].isUpgraded}
                scale={scale}
            />
            {bonuses[6] && <Label
                size={"medium"}
                value={bonuses[6].value}
                x={487 * scale}
                y={677 * scale}
                isInverted={isInverted(type.effects[6])}
                isUpgraded={bonuses[6].isUpgraded}
                scale={scale}
            />}
            {bonuses[7] && type.effects[7] != null && <Label
                size={"medium"}
                value={bonuses[7].value}
                x={487 * scale}
                y={738 * scale}
                isInverted={isInverted(type.effects[7])}
                isUpgraded={bonuses[7].isUpgraded}
                scale={scale}
            />}

            {/* Health */}
            <Label
                size={"medium"}
                value={props.data.primaryHealth}
                x={86 * scale}
                y={20 * scale}
                isNoOperator
                scale={scale}
            />
            <Label
                size={"medium"}
                value={props.data.secondaryHealth}
                x={46 * scale}
                y={81 * scale}
                isNoOperator
                scale={scale}
            />
        </div>
    )
}
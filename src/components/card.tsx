import Image from "next/image";

type labelSize = "small" | "medium" | "large";

import { heroRarity } from "@/types/cardRarity";
import { heroTypeData } from "@/data/heroTypeData";
import { heroType } from "@/types/heroType";
import ShowIf from "./show";
import { parseBonuses } from "@/tools/bonusParse";

function effectValue(value: number, isInverted: boolean) {

    let sign = "+";

    if (isInverted == true) sign = "";

    if (value < 0) return sign = "-"

    return sign + value.toString();

}

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

    let isInverted = props.isInverted ?? false;
    let isUpgraded = props.isUpgraded ?? false;
    let isNoOperator = props.isNoOperator ?? false;
    let isCentered = props.isCentered ?? false;
    let x = props.x;
    let y = props.y;
    let scale = props.scale;

    if (isInverted) x += 54*scale;

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
            pxSize = 36*scale;
            break;
        case "medium":
            pxSize = 44*scale;
            break;
        case "large":
            pxSize = 40*scale;
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

export default function Card(props: { data: heroRarity, width?: number, height?: number }) {

    let type: heroType = heroTypeData[props.data.cid];

    if (props.data.energy.length != 4) throw new Error("data.energy must have exactly four elements")

    let effectCounts = type.effectCounts;

    let bonusLength = effectCounts.reduce((ac, cur) => { return ac + cur });

    if (props.data.bonuses.length != bonusLength) throw new Error("data.bonuses of hero " + props.data.cid + " must have exactly " + bonusLength + " elements")

    let bonuses = parseBonuses(props.data.bonuses, effectCounts);
    //console.log(bonuses);

    let scale = 1;

    if (props.width) scale = props.width / 640;

    if (props.height) scale = props.height / 894;

    if (props.width && props.height) throw new Error("You can't set both width and height")

    return (
        <div style={
            {
                position: "relative",
                width: 640 * scale + "px",
                height: 894 * scale + "px",
            }
        }>


            <Image
                src={type.cardUrl}
                alt={props.data.name + " card"}
                width={640 * scale}
                height={894 * scale}
                priority
            />

            <ShowIf condition={props.data.isFoil}>
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
                />
            </ShowIf>

            {/* Name */}
            <Label 
            size={"large"} 
            value={props.data.name} 
            x={315 * scale} 
            y={18 * scale} 
            isCentered 
            scale={scale}
            />

            {/* 1. Phase */}
            <Label
                size={"small"}
                value={props.data.energy[0].value}
                x={84 * scale}
                y={630 * scale}
                isUpgraded={props.data.energy[0].isUpgraded}
                scale={scale}
            />
            <Label
                size={"medium"}
                value={bonuses[0].value}
                x={68 * scale}
                y={685 * scale}
                isInverted={type.inverteds[0]}
                isUpgraded={bonuses[0].isUpgraded}
                scale={scale}
            />
            <ShowIf condition={effectCounts[0] == 2}>
                <Label
                    size={"medium"}
                    value={bonuses[1].value}
                    x={68 * scale}
                    y={746 * scale}
                    isInverted={type.inverteds[1]}
                    isUpgraded={bonuses[1].isUpgraded}
                    scale={scale}
                />
            </ShowIf>

            {/* 2. Phase */}
            <Label
                size={"small"}
                value={props.data.energy[1].value}
                x={223 * scale}
                y={622 * scale}
                isUpgraded={props.data.energy[1].isUpgraded}
                scale={scale}
            />
            <Label
                size={"medium"}
                value={bonuses[2].value}
                x={206 * scale}
                y={675 * scale}
                isInverted={type.inverteds[2]}
                isUpgraded={bonuses[2].isUpgraded}
                scale={scale}
            />
            <ShowIf condition={effectCounts[1] == 2}>
                <Label
                    size={"medium"}
                    value={bonuses[3].value}
                    x={206 * scale}
                    y={739 * scale}
                    isInverted={type.inverteds[3]}
                    isUpgraded={bonuses[3].isUpgraded}
                    scale={scale}
                />
            </ShowIf>

            {/* 3. Phase */}
            <Label
                size={"small"}
                value={props.data.energy[2].value}
                x={363 * scale}
                y={633 * scale}
                isUpgraded={props.data.energy[2].isUpgraded}
                scale={scale}
            />
            <Label
                size={"medium"}
                value={bonuses[4].value}
                x={348 * scale}
                y={686 * scale}
                isUpgraded={bonuses[4].isUpgraded}
                isInverted={type.inverteds[4]}
                scale={scale}
            />
            <ShowIf condition={effectCounts[2] == 2}>
                <Label
                    size={"medium"}
                    value={bonuses[5].value}
                    x={348 * scale}
                    y={747 * scale}
                    isInverted={type.inverteds[5]}
                    isUpgraded={bonuses[5].isUpgraded}
                    scale={scale}
                />
            </ShowIf>

            {/* 4. Phase */}
            <Label
                size={"small"}
                value={props.data.energy[3].value}
                x={503 * scale}
                y={623 * scale}
                isUpgraded={props.data.energy[3].isUpgraded}
                scale={scale}
            />
            <Label
                size={"medium"}
                value={bonuses[6].value}
                x={487 * scale}
                y={677 * scale}
                isInverted={type.inverteds[6]}
                isUpgraded={bonuses[6].isUpgraded}
                scale={scale}
            />
            <ShowIf condition={effectCounts[3] == 2}>
                <Label
                    size={"medium"}
                    value={bonuses[7].value}
                    x={487 * scale}
                    y={738 * scale}
                    isInverted={type.inverteds[7]}
                    isUpgraded={bonuses[7].isUpgraded}
                    scale={scale}
                />
            </ShowIf>

            {/* Health */}
            <Label
                size={"medium"}
                value={props.data.primaryHealth}
                x={86 * scale}
                y={15 * scale}
                isNoOperator
                scale={scale}
            />
            <Label
                size={"medium"}
                value={props.data.secondaryHealth}
                x={46 * scale}
                y={76 * scale}
                isNoOperator
                scale={scale}
            />
        </div>
    )
}
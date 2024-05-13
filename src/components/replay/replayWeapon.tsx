import { replayWeapon } from "@/types/replay/replayState"
import Card from "../card"
import EffectImg from "../images/effectImg";
import effectMap from "@/data/swo/effectMap";
import colorMap from "@/data/swo/colorMap";
import Image from "next/image";

export default function ReplayWeapon(
    props: {
        weapon: replayWeapon,
        isSelected: boolean,
        width?: number,
        isOnTurn: boolean,
        isTarget?: boolean
    }
) {
    const weapon = props.weapon;

    const weaponWidth = props.width ?? 200;

    const isOnTurn = props.isOnTurn;

    const isTarget = props.isTarget;

    return (
        <div style={{
            position: "relative",
            width: weaponWidth,
            backgroundColor: "black"
        }}>
            <div style={{
                opacity: weapon.stashedEffect !== null ? "0.5" : "1"
            }}>
                <Card data={weapon.card} width={weaponWidth} gray={!isOnTurn}/>
            </div>
            {weapon.broken == "BROKEN" && <Image
                src={"/broken.png"}
                alt="broken"
                height={weaponWidth * 1}
                width={weaponWidth * 1}
                style={{
                    position: "absolute",
                    opacity: "0.8",
                    bottom: "0",
                }}
            />}

            {weapon.broken == "FIXING" && <Image
                src={"/repairing.png"}
                alt="fixing"
                height={weaponWidth * 1.2}
                width={weaponWidth * 1}
                style={{
                    position: "absolute",
                    opacity: "0.8",
                    bottom: "0",
                }}
            />}

            {isTarget && <Image
                src={"/aim.png"}
                alt="target"
                height={weaponWidth * 1.2}
                width={weaponWidth * 1}
                style={{
                    position: "absolute",
                    opacity: "0.8",
                    bottom: "-20%",
                }}
            />}

            {weapon.broken == "CURSED" && <Image
                src={"/cursed.png"}
                alt="cursed"
                height={weaponWidth * 1.1}
                width={weaponWidth * 1}
                style={{
                    position: "absolute",
                    opacity: "1",
                    bottom: "0",
                }}
            />}

            {weapon.broken == "UNCURSING" && <Image
                src={"/uncursing.png"}
                alt="uncursing"
                height={weaponWidth * 1.1}
                width={weaponWidth * 1}

                style={{
                    position: "absolute",
                    opacity: "1",
                    bottom: "0",
                }}
            />}

            <div>
                {weapon.stashedEffect !== null && weapon.stashedEffect &&
                    <div style={{
                        position: "absolute",
                        bottom: "50%",
                        left: "50%",
                        transform: "translate(-50%, 50%)",
                        color: "white"
                    }}>
                        <EffectImg
                            effect={effectMap[weapon.stashedEffect.type]}
                            color={weapon.stashedEffect !== null ? (weapon.stashedEffect.color !== null ? colorMap[weapon.stashedEffect.color] : "none") : "none"}
                        /> {weapon.stashedEffect.value} 
                        {weapon.stashedEffect.durability && <> ({weapon.stashedEffect.durability})
                        </>}
                    </div>
                }
            </div>
        </div>
    )
}
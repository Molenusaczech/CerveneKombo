import { replayPlayer } from "@/types/replay/replayState";
import Card from "../card";
import ProgressBar from "@ramonak/react-progress-bar";

import Image from "next/image";

export default function ReplayHero(props: {
    player: replayPlayer,
    isOnTurn: boolean,
    isTarget?: boolean
}) {

    const player = props.player;
    const isTarget = props.isTarget;

    return (
        <div>
            <div style={{
                position: "relative",
                height: 300,
            }}>
                <Card
                    data={player.hero}
                    height={300}
                    gray={props.isOnTurn ? false : true}
                />

                {isTarget && <Image
                    src={"/aim.png"}
                    alt="target"
                    height={300 * 1}
                    width={300 * 0.7}
                    style={{
                        position: "absolute",
                        opacity: "0.8",
                        bottom: "0%",
                    }}
                />
                }
            </div>

            <div>
                <ProgressBar
                    completed={(player.hp / player.max_hp) * 100}
                    bgColor="#dc3545"
                    height="20px"
                    customLabel={player.hp + "/" + player.max_hp + " Životy"}
                    labelColor="black"
                    labelSize="1rem"
                    labelAlignment="outside"
                />
            </div>
            <div>
                <ProgressBar
                    completed={(player.actions / 4) * 100}
                    bgColor="#ffc107"
                    height="20px"
                    customLabel={player.actions + "/4 Akce"}
                    labelColor="black"
                    labelSize="1rem"
                    labelAlignment="outside"
                />
            </div>
            <div>
                <ProgressBar
                    completed={(player.energy / 12) * 100}
                    bgColor="#28a745"
                    height="20px"
                    customLabel={player.energy + "/12 Energie"}
                    labelColor="black"
                    labelSize="1rem"
                    labelAlignment="outside"
                />
            </div>
        </div>
    )
}
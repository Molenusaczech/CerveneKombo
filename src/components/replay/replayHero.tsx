import { replayPlayer } from "@/types/replay/replayState";
import Card from "../card";
import ProgressBar from "@ramonak/react-progress-bar";

export default function ReplayHero(props: {
    player: replayPlayer
}) {

    const player = props.player;

    return (
        <div>
            <Card data={player.hero} height={300} />
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
                    completed={(player.energy / 10) * 100}
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
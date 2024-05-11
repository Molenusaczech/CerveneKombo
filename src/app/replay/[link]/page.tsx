import ReplayView from "@/components/replay/replayView";
import getReplayFromSwo from "@/tools/replay/getReplayFromSwo";
import { replay } from "@/types/replay/replay";


export default async function PlayReplay({ params }: { params: { link: string } }) {
    "use server";


    const replayData: replay = await getReplayFromSwo(params.link);

    return (
        <div>
            <div>
                {decodeURIComponent(params.link)}
            </div>
            {/*JSON.stringify(replayData.events)*/}

            {/*JSON.stringify(data)*/}

            <div>
                <ReplayView data={replayData} />
            </div>
        </div>
    )
}

import ReplayView from "@/components/replay/replayView";
import getReplayFromSwo from "@/tools/replay/getReplayFromSwo";
import { replay } from "@/types/replay/replay";


export default async function PlayReplay({ params }: { params: { link: string } }) {
    "use server";


    const replayData: replay = await getReplayFromSwo(params.link);

    return (
        <div>
            {decodeURIComponent(params.link)}

            {JSON.stringify(replayData.events)}

            {/*JSON.stringify(data)*/}

            <ReplayView data={replayData} />

        </div>
    )
}

import getReplayFromSwo from "@/tools/replay/getReplayFromSwo";

export default async function PlayReplay({ params }: { params: { link: string } }) {
    "use server";


    const replayData = await getReplayFromSwo(params.link);

    return (
        <div>
            {decodeURIComponent(params.link)}

            {JSON.stringify(replayData.events)}

            {/*JSON.stringify(data)*/}

        </div>
    )
}

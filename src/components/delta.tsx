import effectValue from "@/tools/effectValue";

import deltaMsgs from "@/data/deltaMsgs";

function rawDeltaText(delta: number, isBest?: boolean, isWorst?: boolean) {
    const deltaText = effectValue(delta, false);

    let deltaKey = effectValue(delta, false);

    if (isBest) deltaKey = "best";
    if (isWorst) deltaKey = "worst";

    return `${deltaText} | ${deltaMsgs[deltaKey as keyof typeof deltaMsgs]}`;
}


function DeltaText(props: { delta: number, isBest?: boolean, isWorst?: boolean }) {

    const delta = props.delta;
    const isBest = props.isBest ?? false;
    const isWorst = props.isWorst ?? false;

    return (
        <div className='text-center'>
            Průměr: {rawDeltaText(delta, isBest, isWorst)}
        </div>
    )
}

export { DeltaText, rawDeltaText};
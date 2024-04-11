import effectValue from "@/tools/effectValue";

import deltaMsgs from "@/data/deltaMsgs";

function DeltaText(props: {delta: number, isBest?: boolean, isWorst?: boolean}) {
    
    const delta = props.delta;
    const isBest = props.isBest ?? false;
    const isWorst = props.isWorst ?? false;

    const deltaText = effectValue(delta, false);

    let deltaKey = effectValue(delta, false);

    if (isBest) deltaKey = "best";
    if (isWorst) deltaKey = "worst";

    return (
        <div className='text-center'>
            Průměr: {deltaText} | {deltaMsgs[deltaKey as keyof typeof deltaMsgs]}
        </div>
    )
}

export default DeltaText;
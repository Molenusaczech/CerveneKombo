import { getLevel, getPercentToNextLevel, getXPForLevel } from "@/tools/xpHandler";

import ProgressBar from "@ramonak/react-progress-bar";

function LevelBar(props: { xp: number }) {
    
    let xp = props.xp;
    //xp = 240;

    let level = getLevel(xp);
    
    if (level == 31) {
        return (
        <ProgressBar completed={100} customLabel={"Max level: "+xp+"xp"} labelAlignment="outside" labelColor="black"/>
        );
    }
    
    let percent = getPercentToNextLevel(xp);

    return (
        <ProgressBar completed={percent} labelAlignment="outside" labelColor="black" customLabel={`Level ${level - 1}: `+xp+"/"+getXPForLevel(level+1)+"xp ("+percent+"%)"} />
    );


}

export default LevelBar;
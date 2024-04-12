import { rgbToHex, hexToRgb, colorMutation } from "../tools/colorTools";

export default function LabeledVal(props: { topText: string, botText: string, color: string } ) {
    //console.log(props.topText);
    //console.log(props.botText);
    return (
        <div className="grid grid-cols-1">
            <div style={{
                backgroundColor: props.color,
            }} className="text-center p-1 rounded-t-md">
                {props.topText}
            </div>
            <div style={{
                backgroundColor: colorMutation(props.color, 20),
            }} className="text-center p-1 rounded-b-md">
                {props.botText}
            </div>
        </div>
    )
}
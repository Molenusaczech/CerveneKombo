import { rgbToHex, hexToRgb, colorMutation } from "../tools/colorTools";

export default function LabeledVal(props: { topText: string, botText: string, color: string } ) {
    console.log(props.topText);
    console.log(props.botText);
    return (
        <div style={{
            width: "200px",
            padding: "0"
        }}>
            <div style={{
                backgroundColor: props.color,
                padding: "5px",
                width: "100%",
                textAlign: "center",
                verticalAlign: "middle",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px"
            }}>
                {props.topText}
            </div>
            <div style={{
                padding: "5px",
                width: "100%",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: colorMutation(props.color, 20),
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px"
            }}>
                {props.botText}
            </div>
        </div>
    )
}
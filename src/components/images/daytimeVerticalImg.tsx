export default function DaytimeVerticalImg(props: { time: number, isFirst: boolean }) {
    let { time, isFirst } = props;
    if (time < -1) throw new Error("Invalid time");

    let dayClass = "";

    if (time !== -1) {
        dayClass = "_d" + time % 4;
    }

    let firstClass = "";

    if (isFirst) {
        firstClass = "first";
    }

    const day = Math.floor(time / 4) + 1;

    return (
        <div className="grid grid-cols-2">
            <span className={"day-counter " + dayClass + " " + firstClass} style={{
                width: "192px",
                height: "64px",
                display: "block",
                float: "left",
                backgroundSize: "cover",
                left: "50%",
                transform: "translateX(-50%)",
                position: "relative",
            }}></span>
            <span>
                {day}. den
            </span>
        </div>
    )
}
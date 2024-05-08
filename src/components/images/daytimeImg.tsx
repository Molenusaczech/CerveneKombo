export default function DaytimeImg(props: { time: number }) {
    let { time } = props;
    if (time < 0 || time > 3) throw new Error("Invalid time");
    return (


        <span className={"icon-32 days d"+time}></span>
    )
}
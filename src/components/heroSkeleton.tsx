import Image from "next/image";

export default function HeroSkeleton(props: {
    width?: number,
    height?: number,
    useImg?: boolean,
    imgRootLink?: string
}) {
    let scale = 1;

    if (props.width) scale = props.width / 640;

    if (props.height) scale = props.height / 894;

    if (props.width && props.height) throw new Error("You can't set both width and height")

    return (
        <div>
            {props.useImg ? <img
                src={props.imgRootLink + "/heroes/blank.jpg"}
                alt={"loading card"}
                width={640 * scale}
                height={894 * scale}
            /> : <Image
                src={"/heroes/blank.jpg"}
                alt={"loading card"}

                width={640 * scale}
                height={894 * scale}
                priority
            />}
        </div>
    )
}
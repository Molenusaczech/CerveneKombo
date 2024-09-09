import { title } from "process";
import { ReactChild, ReactChildren, ReactElement } from "react";

function LookupSmallCard(props: {
    title: string,
    className?: string
    children: JSX.Element
}) {
    const className = props.className ?? "";
    return (
        <div className={"bg-card p-4 rounded-lg shadow-md "+className}>
            <div className="text-sm text-muted-foreground">{props.title}</div>
            {props.children}
        </div>
    )
}

function LookupLongCard(props: {
    title: string,
    rightTitle: string,
    className?: string
    children: JSX.Element,
}) {
    const className = props.className ?? "";
    return (
        <div className={"bg-card p-4 rounded-lg shadow-md "+className}>
            <div className="flex items-center justify-between">
                <div className="text-muted-foreground">{props.title}</div>
                <div className="text-primary font-semibold">{props.rightTitle}</div>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export { LookupSmallCard, LookupLongCard }
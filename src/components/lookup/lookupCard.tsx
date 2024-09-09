import { title } from "process";
import { ReactChild, ReactChildren, ReactElement } from "react";

function LookupSmallCard(props: {
    title: string,
    children: JSX.Element
}) {
    return (
        <div className="bg-card p-4 rounded-lg shadow-md">
            <div className="text-sm text-muted-foreground">{props.title}</div>
            {props.children}
        </div>
    )
}

function LookupLongCard(props: {
    title: string,
    rightTitle: string,
    children: JSX.Element
}) {
    return (
        <div className="bg-card p-4 rounded-lg shadow-md">
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
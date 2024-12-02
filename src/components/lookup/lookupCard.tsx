import { title } from "process";
import { ReactChild, ReactChildren, ReactElement } from "react";
import { Card } from "@/components/ui/card";

function LookupSmallCard(props: {
    title: string,
    className?: string
    children: JSX.Element
}) {
    const className = props.className ?? "";
    return (
        <Card className={"bg-card p-4 rounded-lg shadow-md "+className}>
            <div className="text-sm text-muted-foreground">{props.title}</div>
            {props.children}
        </Card>
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
        <Card className={"bg-card p-4 rounded-lg shadow-md "+className}>
            <div className="flex items-center justify-between">
                <div className="text-muted-foreground">{props.title}</div>
                <div className="text-primary font-semibold">{props.rightTitle}</div>
            </div>
            <div>
                {props.children}
            </div>
        </Card>
    )
}

export { LookupSmallCard, LookupLongCard }
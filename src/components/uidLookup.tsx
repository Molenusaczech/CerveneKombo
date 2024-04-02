"use client";

import { heroFromUid } from "@/types/heroFromUid";
import Card from "@/components/card";

import { useState } from "react";

export default function UidLookup({ params }: { params: { data: heroFromUid } }) {
    "use client";

    const [isUpgraded, setIsUpgraded] = useState(false);

    const data = params.data;

    const cardData = isUpgraded ? data.upgradedCard : data.card;

    return (
        <div>
            {/*<h1> Home </h1>
        <h1> Home </h1>
    <h1> Home </h1>*/}
            <Card data={cardData} />

            {isUpgraded ? "Upgraded" : "Not Upgraded"} <br></br>

            <button onClick={() => setIsUpgraded(!isUpgraded)}>Toggle Upgraded</button>
            <br></br>
            {JSON.stringify(data)}

        </div>
    )
}
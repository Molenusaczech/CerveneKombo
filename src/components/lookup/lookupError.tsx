import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

import Image  from "next/image";
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";
import getTypeData from "@/tools/types/getTypeData";

export default function LookupError(props: {
    searchType: "uid" | "stats";
    cid?: heroCid | weaponCid | null;
    name?: string | null;
    uid?: string | null;
}
) {

    const typeData = props.cid ? getTypeData(props.cid) : null;

    return (
        <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Karta nenalezena</CardTitle>
          <CardDescription>Zkontroluj prosím, zda jsi zadal správné údaje.</CardDescription>
        </CardHeader>
            <CardContent>
          <div className="space-y-2">
            <div>
              
              {props.uid && (
                <p>
                    <b>UID:</b> {props.uid}
                </p>
                )}
                {props.name && props.cid && (
                    <p>
                        <b>Jméno:</b> {props.name}
                        <br />
                        <b>Typ:</b> {typeData?.typeData.cname.CS}
                    </p>
                )}
            </div>
          </div>
          {props.searchType === "uid" && <div className="flex items-center mt-4 p-4 bg-muted rounded-md">
            <AlertCircle className="h-20 w-20 mr-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Zkontroluj, že je karta naskenovaná! Pokud karta není naskenovaná, nelze jí podle QR kódu najít!
            </p>
          </div>}
        </CardContent>
      </Card>
    )
}
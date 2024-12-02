"use client";
import { Search } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { CardLookupForm } from "../lookupForm/card-lookup-form";

export default function LookupFAB() {
    "use client";
    return (
        <Dialog>
            <DialogTrigger>
                <div className={buttonVariants({ variant: "default" })+" fixed right-6 bottom-6 w-14 h-14 z-50"}>
                    <Search className="h-8 w-8" />
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                        <CardLookupForm />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
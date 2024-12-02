"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { heroCid, heroTypeData } from "@/data/heroTypeData";
import { CardCidSelect } from "./cardCidSelect";

const formSchema = z.object({
    cardName: z.string(),
    cid: z.string()
})

export default function TypeForm() {
    "use client";
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cardName: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return <div>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="cid"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Druh karty</FormLabel>
                            <FormControl>
                                <CardCidSelect onSelect={field.onChange} />
                            </FormControl>
                            <FormDescription>
                                Karty jsou seřazeny podle abecedy, zbraně jsou úplně dole.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="cardName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Jméno karty</FormLabel>
                            <FormControl>
                                <Input placeholder="Mole" {...field} />
                            </FormControl>
                            <FormDescription>
                                Pokud hledáš zbraň, zadej její čtyřmístný kód.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>

    </div>
}

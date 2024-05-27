"use client";
import AppForm from "@/components/auth/appForm";
import { getUserFromToken } from "@/tools/auth/token";
import { dbUser } from "@/types/auth/user";
import getDiscordUrl from "@/tools/discord/getDiscordUrl";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function Account() {

    "use client";

    const [user, setUser] = useState<dbUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [discordUrl, setDiscordUrl] = useState("");

    
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token) {
            getUserFromToken(token).then((user) => {
                setLoading(false);
                setUser(user);

                if (!user) {
                    window.localStorage.removeItem("token");
                    alert("Přihlášení neplatné, přihlašte se znovu");
                }
            });
        } else {
            setLoading(false);
        }

        getDiscordUrl().then((url) => {
            setDiscordUrl(url);
        });

    }, []);

    return (
        <div>
            {!loading && user &&

                <div>Přihlášený jako {user.globalName}

                    {user.appId && <div>
                        Tvoje app ID je {user.appId}
                    </div>}

                    {!user.appId && <div>
                        Nemáš propojený účet v app
                        <Button variant="contained" href="/account/connectApp">Propojit</Button>
                    </div>}

                    <div>
                        {user.isAdmin ? <div>
                            Jsi admin
                        </div> : <div> Nejsi admin</div>}
                    </div>

                    <div>
                        {user.isOrg ? <div>
                            Jsi organizátor
                        </div> : <div> Nejsi organizátor</div>}
                    </div>

                    <div>
                        <Button variant="contained" href="/account/logout">Odhlásit</Button>
                    </div>

                </div>}  
                
                {!user && !loading && <div>
                    Nejste přihlášený
                    <Button variant="contained" href={discordUrl}>Přihlásit</Button>
                </div>}

            {loading && <div>
                Načítám...
            </div>}
        </div>
    )
}
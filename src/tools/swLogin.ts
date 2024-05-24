"use server";

export default async function loginWithApp(appId: string, appPin: string) {
    console.log("Logging in with app id "+appId);
    
    const response = await fetch("https://scratchwars.cloud/public/api/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            uid: appId,
            pin: appPin,
        }),
    });

    //console.log(response);

    if (response.status == 200) {
        return true;
    } else {
        return false;
    }
}
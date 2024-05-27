"use server";
async function getDiscordUrl() {
    return 'https://discord.com/oauth2/authorize?client_id='+process.env.DISCORD_CLIENT_ID+'&response_type=code&redirect_uri='+encodeURIComponent(process.env.WEBSITE_URL as string+"/discordRedirect")+'&scope=identify';
}

export default getDiscordUrl;
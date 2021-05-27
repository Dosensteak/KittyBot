import {Client} from "discord.js";

const bot = new Client();

bot.on("ready", () => console.log(`${bot.user.username} is online`));
bot.on("message", async (msg) => {
    if(msg.author.bot) return;

    await msg.reply("Hi");
});

bot.login("ODQ3NDU4NTE1ODQ1MjUxMDky.YK-XPw.IEA1TEGfOrWIducFUyX5oYUJV1M");
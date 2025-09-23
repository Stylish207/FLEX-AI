const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    alias: ["allmenu","fullmenu"],
    use: '.menu',
    desc: "Show all bot commands",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` ╭━━━━━〔𝐅𝐋𝐄𝐗-𝐀𝐈〕━━━━╮
┃ 👑 Owner      : ${config.OWNER_NAME}
┃ ⚙️ Prefix     : [${config.PREFIX}]
┃ 🌐 Platform   : HERUKO
┃ 📦 Version    : 4.0.0
┃ ⏱️ Runtime    : ${runtime(process.uptime())}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
┏▣ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔♥
│➽ facebook  
│➽ twitter  
│➽ img  
│➽ apk2  
│➽ spotify  
│➽ audio  
│➽ ytmp3  
│➽ darama  
│➽ tiks  
│➽ mediafire  
│➽ insta  
│➽ tt2  
│➽ fb2  
│➽ play  
│➽ video  
│➽ ytmp4  
│➽ gdrive  
│➽ ssweb  
│➽ tiktok  
│➽ apk  
│➽ pins  
│➽ pinterest  
│➽ play2  
│➽ video2  
│➽ song  
┗▣

  【𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔】  
│➽ grouplink  
│➽ add  
│➽ remove  
│➽ kick  
│➽ promote  
│➽ demote  
│➽ dismiss  
│➽ revoke  
│➽ setgoodbye  
│➽ setwelcome  
│➽ delete  
│➽ getpic  
│➽ ginfo  
│➽ disappear  
│➽ updategname  
│➽ updategdesc  
│➽ joinrequests  
│➽ senddm  
│➽ nikal  
│➽ mute  
│➽ unmute  
│➽ lockgc  
│➽ unlockgc  
│➽ invite  
│➽ tag  
│➽ hidetag  
│➽ tagall  
│➽ tagadmins  
┗▣
┏▣ ◈ 𝐅𝐋𝐄𝐗 𝐆𝐀𝐌𝐄𝐒 ◈
│➽ konami  
│➽ squidgame  
│➽ endgame  
│➽ guess  
│➽ numbergame  
┗▣
┏▣ ◈ 𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍 𝐌𝐄𝐍𝐔 ◈
│➽ bully  
│➽ cuddle  
│➽ cry  
│➽ hug  
│➽ awoo  
│➽ kiss  
│➽ lick  
│➽ pat  
│➽ smug  
│➽ bonk  
│➽ yeet  
│➽ blush  
│➽ smile  
│➽ wave  
│➽ highfive  
│➽ handhold  
│➽ nom  
│➽ bite  
│➽ glomp  
│➽ slap  
│➽ kill  
│➽ happy  
│➽ wink  
│➽ poke  
│➽ dance  
│➽ cringe  
┗▣

┏▣ ◈ 𝑭𝑳𝑬𝑿 𝑳𝑶𝑮𝑶◈
│➽ neonlight  
│➽ blackpink  
│➽ dragonball  
│➽ 3dcomic  
│➽ america  
│➽ naruto  
│➽ sadgirl  
│➽ clouds  
│➽ futuristic  
│➽ 3dpaper  
│➽ eraser  
│➽ sunset  
│➽ leaf  
│➽ galaxy  
│➽ sans  
│➽ boom  
│➽ hacker  
│➽ devilwings  
│➽ nigeria  
│➽ bulb  
│➽ angelwings  
│➽ zodiac  
│➽ luxury  
│➽ paint  
│➽ frozen  
│➽ castle  
│➽ tatoo  
│➽ valorant  
│➽ bear  
│➽ typography  
│➽ birthday  
┗▣

┏▣ ◈𝐅𝐋𝐄𝐗 𝐎𝐖𝐍𝐄𝐑◈
│➽ owner  
│➽ menu  
│➽ menu2  
│➽ vv  
│➽ davincs 
│➽ allmenu  
│➽ repo  
│➽ block  
│➽ unblock  
│➽ fullpp  
│➽ setpp  
│➽ restart  
│➽ shutdown  
│➽ updatecmd  
│➽ alive  
│➽ ping  
│➽ gjid  
│➽ jid  
┗▣

┏▣ ◈ 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔 ◈
│➽ shapar  
│➽ rate  
│➽ insult  
│➽ hack  
│➽ ship  
│➽ character  
│➽ pickup  
│➽ joke  
│➽ hrt  
│➽ hpy  
│➽ syd  
│➽ anger  
│➽ shy  
│➽ kiss  
│➽ mon  
│➽ cunfuzed  
│➽ hand  
│➽ hold  
│➽ hug  
│➽ poke  
│➽ hifi  
┗▣

┏▣ ◈𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔◈
│➽ sticker  
│➽ sticker2  
│➽ emojimix  
│➽ fancy  
│➽ take  
│➽ tomp3  
│➽ tts  
│➽ trt  
│➽ base64  
│➽ unbase64  
│➽ binary  
│➽ dbinary  
│➽ tinyurl  
│➽ urldecode  
│➽ urlencode  
│➽ url  
│➽ repeat  
│➽ ask  
│➽ readmore  
┗▣
┏▣ ◈ 𝐂𝐎𝐍𝐓𝐑𝐎𝐋 𝐌𝐄𝐍𝐔 ◈
│➽ autoreact on/off  
│➽ mode private/public  
│➽ auto_status_seen on/off  
│➽ antidelete on/off  
│➽ welcome on/off  
│➽ prefix (set prefix)  
│➽ antilink on/off  
│➽ auto_status_react on/off  
│➽ always_online on/off
│➽ auto_typing on/off
│➽ auto_recording on/off
│➽ auto_sticker on/off
┗▣

┏▣ ◈ 𝐀𝐈 𝐌𝐄𝐍𝐔 ◈
│➽ ai  
│➽ gpt3  
│➽ gpt2  
│➽ gptmini  
│➽ gpt  
│➽ meta  
│➽ blackbox  
│➽ luma  
│➽ dj  
│➽ flex  
│➽ help  
│➽ gpt4  
│➽ bing  
│➽ imagine  
│➽ imagine2  
│➽ copilot  
┗▣

┏▣ ◈𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔◈
│➽ ping  
│➽ help  
│➽ speed  
│➽ restart  
│➽ alive  
│➽ runtime  
│➽ uptime  
│➽ repo  
│➽ owner  
│➽ menu  
│➽ help  
│➽ update  
┗▣

┏▣ ◈ 𝐀𝐍𝐈𝐌𝐄 𝐌𝐄𝐍𝐔◈
│➽ fack  
│➽ truth  
│➽ dare  
│➽ dog  
│➽ awoo  
│➽ garl  
│➽ waifu  
│➽ neko  
│➽ megnumin  
│➽ maid  
│➽ loli  
│➽ animegirl (1–5)  
│➽ anime (1–5)  
│➽ animenews  
│➽ foxgirl  
│➽ naruto  
┗▣

┏▣ ◈𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔◈
│➽ timenow  
│➽ date  
│➽ count  
│➽ calculate  
│➽ countx  
│➽ flip  
│➽ coinflip  
│➽ rcolor  
│➽ roll  
│➽ fact  
│➽ cpp  
│➽ rw  
│➽ pair (1–3)  
│➽ fancy  
│➽ logo <text>  
│➽ define  
│➽ news  
│➽ movie  
│➽ weather  
│➽ srepo  
│➽ insult  
│➽ save  
│➽ wikipedia  
│➽ gpass  
│➽ githubstalk  
│➽ yts  
│➽ ytv  
┗▣ 2025 𝐅𝐋𝐄𝐗𝐈𝐍𝐆🤪
━━━━━━━━━━━━━━━


> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/dff3u2.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363318767880951@newsletter',
                        newsletterName: config.BOT_NAME,
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});

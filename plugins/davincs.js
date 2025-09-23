const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "davincs",
    alias: ["fullhelp","fullmenu"],
    use: '.flex',
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *CONNECT*〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 👑 *Owner :* ${config.OWNER_NAME}
┃◈┃• ⚙️ *Prefix :* [${config.PREFIX}]
┃◈┃• 🌐 *Platform :* LINUX
┃◈┃• 📦 *Version :* 4.0.0 Pro
┃◈┃• ⏱️ *Runtime :* ${runtime(process.uptime())}
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

🌐 Connect with DavincsTech Everywhere 🚀

🔗 GitHub
👉 github.com/allan-davincs

📘 Facebook
👉 facebook.com/DavincsXTech

📸 Instagram
👉 instagram.com/davincstech

🎵 TikTok
👉 tiktok.com/@davincs_tech

▶️ YouTube
👉 youtube.com/@DavincsTech

🧵 Threads
👉 threads.net/@davincstech

🌍 Websites
👉 www.flex-ai.site
👉 www.davincstech.website

✨ Stay connected, explore projects, and join the DavincsTech journey 💡💻⚡
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url:'https://files.catbox.moe/a44m93.jpg' },
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

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/u8wetv.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});

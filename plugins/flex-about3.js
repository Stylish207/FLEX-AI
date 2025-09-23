const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "flex",
    alias: ["fullhelp","fullmenu"],
    use: '.flex',
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 🚀 *${config.BOT_NAME}* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 👑 *Owner :* ${config.OWNER_NAME}
┃◈┃• ⚙️ *Prefix :* [${config.PREFIX}]
┃◈┃• 🌐 *Platform :* LINUX
┃◈┃• 📦 *Version :* 4.0.0 Pro
┃◈┃• ⏱️ *Runtime :* ${runtime(process.uptime())}
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷
*Hellow there FLEX-AI user 👋
I'm FLEX-AI, the official WhatsApp assistant bot developed by Allan Davincs*

I’m here to help you with smart tasks, group management, image generation, fun games, and more — all through simple commands.

All my commands start with a prefix — by default, it’s a . (dot).
Example: .flex


----

*To see all commands use .menu*

>📜 Common Commands

1️⃣ Information & Status

.flex        → Learn everything about FLEX-AI  
.ping        → Check if I’m online & my speed

2️⃣ Auto Features

.autotyping on/off       → Toggle automatic typing status  
.autorecording on/off    → Toggle automatic recording status  
.alwaysonline on/off     → Keep me online 24/7  
.auto_status_seen on/off → Auto-view statuses  
.auto_status_react on/off→ Auto-react to viewed statuses

3️⃣ Group & Privacy

.mode private/public  → Set my response mode  
.welcome on/off       → Greet new members automatically  
.antidelete on/off    → Recover deleted messages  
.antilink on/off      → Block unwanted links in group

4️⃣ Fun & Games

.binary       → Convert text to binary  
.rcolor       → Random color name  
.konami       → Special surprise  
.squidgame    → Squid Game challenge  
.guess        → Guess the number  
.count        → Count numbers  
.calculate    → Quick math calculations  
.coinflip     → Flip a coin  
.roll         → Roll a dice

5️⃣ Image & Logo Creation

AI Image Generation

.imagine <prompt>  
Generate AI images from your text prompt.  
Example: .imagine a futuristic city at sunset

Logo Menu

.naruto <text>  → Naruto-style anime text logo  
.hacker <text>  → Hacker-style green matrix effect  
.tatto <text>   → Tattoo-style artistic text  
.boom <text>    → Explosive boom-style text  
.bulb <text>    → Bulb-style glowing light text

6️⃣ Extra Tools

.flex      → Show FLEX-AI menu & info


---

✨ Example Usage

.flex → Learn what FLEX-AI can do

.imagine a dragon flying over mountains → Generate AI art

.hacker FLEX-AI → Create a hacker-style logo

.boom PARTY → Explosive boom-style text

.autoreact on → Start auto-reacting to messages

.calculate 12*45 → Instant math answer

*more information visit site*
www.flex-ai.site
______________________

🌟 *WORLD SAY'S*🌟
FLEX-AI gives you the edge — fast, smart, and playful.
Rule your chats, create your designs, and never miss a beat… that’s the power of FLEX!" ✨
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

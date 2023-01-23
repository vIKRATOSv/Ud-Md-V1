import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[🙈 𝐈𝐍𝐅𝐎 🙈] TAG A USER WITH THE @𝚝𝚊𝚐*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[🙈 𝐈𝐍𝐅𝐎 🙈] ENTER THE NUMBER OF DIAMONDS YOU WANT TO ADD*'
if (isNaN(txt)) throw '*[🙈 𝐈𝐍𝐅𝐎 🙈] SYMBOL NOT ADMITTED, ONLY NUMBER!*'
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw '*[🙈 𝐈𝐍𝐅𝐎 🙈 ] THE MINIMUM NUMBERS OF DIAMOND TO ADD IS 𝟷*'
let users = global.db.data.users
users[who].limit += dmt
m.reply(`≡ *💎 ADDED*
┌──────────────
▢ *𝚃𝚘𝚝𝚊𝚕:* ${dmt}
└──────────────`)
}
handler.command = ['añadirdiamantes','addd','dard','dardiamantes'] 
handler.rowner = true
export default handler

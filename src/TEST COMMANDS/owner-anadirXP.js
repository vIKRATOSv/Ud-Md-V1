import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[ð ðððð ð] TAG A USER WITH THE @ððð*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[ð ðððð ð] ENTER THE AMOUNT OF EXPERIENCE(XP) YOU WANT TO ADD*'
if (isNaN(txt)) throw '*[ð ðððð ð] UNSPORTED SYMBOLS, ONLY NUMBERS!*'
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk
if (exp < 1) throw '*[ð ðððð ð] THE MINUMUM NUMBER OF EXPERIENCE TO ADD IS ð·*'
let users = global.db.data.users
users[who].exp += xp
  m.reply(`â¡ *ðð¿ ADDED*
âââââââââââââââ
â¢  *ððððð:* ${xp}
âââââââââââââââ`)
}
handler.command = ['aÃ±adirxp','addexp'] 
handler.rowner = true
export default handler

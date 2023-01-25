
import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { contextInfo: { externalAdReply: { title: 'Shizu-MD', body: '©xIKRATOSx', sourceUrl: `https://github.com/xIKRATOSx/Shizu-Bot-MD`, thumbnail: imagen2}}})}
    
if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
let join = `*< ADD BOT TO YOUR GROUP />*\n\n*HEY USER*\n*TO REQUEST A BOT FOR YOUR GROUP USE THE #join COMMAND PLUS YOUR GROUP LINK*\n\n*—◉ EXAMPLE:*\n*◉ #join* https://chat.whatsapp.com/KqYY92moqLG4Ik0QWRIgio`.trim() 
this.sendHydrated(m.chat, join, wm, imagen4, 'https://www.paypal.me/NeKosmicOFC', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [[null, null]], m)}
    
    
return !0 }
export default handler

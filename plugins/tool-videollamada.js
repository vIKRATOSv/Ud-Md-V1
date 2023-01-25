import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[🙈] 𝑰𝒏𝒕𝒆𝒓 𝑻𝒉𝒆 𝑷𝒂𝒔𝒘𝒐𝒓𝒅 𝒀𝒐𝒖 𝑾𝒂𝒏𝒕 𝒀𝒐𝒖𝒓 𝑹𝒐𝒐𝒎 𝑻𝒐 𝑯𝒂𝒗𝒆,𝑬𝒙𝒂𝒎𝒑𝒍𝒆 ${usedPrefix + command} 12345678*`
let textfilter = text.toLowerCase()
let res = await fetch(global.API('https://anonyzoom.herokuapp.com', '/index.php', { pass: textfilter }))
let json = await res.json()
if (json.Join_URL == '') { throw '*[🙈] 𝑻𝒉𝒆𝒚 𝑾𝒂𝒔 𝑨𝒏 𝑬𝒓𝒓𝒐𝒓 𝑮𝒆𝒏𝒆𝒓𝒂𝒕𝒊𝒏𝒈 𝑻𝒉𝒆 𝑽𝒊𝒓𝒕𝒖𝒂𝒍 𝑹𝒐𝒐𝒎,𝑷𝒍𝒆𝒂𝒔𝒆 𝑻𝒓𝒚 𝑨𝒈𝒂𝒊𝒏 𝑳𝒂𝒕𝒆𝒓 😪☺️ *'
} else {
let zoomA = `*[ 𝒁𝒐𝒐𝒎 𝑹𝒐𝒐𝒎 𝑮𝒆𝒏𝒆𝒓𝒂𝒕𝒐𝒓 ]*\n
*𝑳𝒊𝒏𝒌 𝒁𝒐𝒐𝒎:* ${json.Join_URL}
*𝑷𝒂𝒔𝒘𝒐𝒓𝒅:* ${json.Password}
*𝑪𝒂𝒍𝒍 𝑫𝒖𝒓𝒂𝒕𝒊𝒐𝒏:* ${json.Duration} minutos`
await conn.reply(m.chat, zoomA, m)
}}
handler.command = /^(zoom|zoomgen|videollamada)$/i
export default handler

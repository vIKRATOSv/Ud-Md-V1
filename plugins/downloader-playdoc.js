import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*WHAT TO SEARCH? PLEASE ENTRE QUERY. EXAMPLE:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*COULD NOT FIND AUDIO, TRY ANOTHER TITLE*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${url}`, buttonText: { displayText: '🎵 AUDIO DOC 🎵' }, type: 1 },
{ buttonId: `#ytmp4doc ${url}`, buttonText: { displayText: '🎥 VIDEO DOC 🎥' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '📋 MORE RESULTS 📋' }, type: 1 }, ]    
let texto1 = `*◉—⌈🔊 PLAY DOCUMENT 🔊⌋—◉*\n
❏ 📌 *TITLE:* ${title}
❏ 📆 *PUBLISHED:* ${publishedTime}
❏ ⌚ *DURATION:* ${durationH}
❏ 👀 *VIEWS:* ${viewH}
❏ 📇 *DESCRIPTION:* ${description}`.trim()
let buttonMessage = {
"document": { url: "https://wa.me/923470027813" }, 
"fileName": '❏ 🌿 results from youtube', 
"mimetype": 'application/vnd.ms-excel',
"caption": texto1,
"fileLength": '99999999999999',
"mentions": [m.sender],
"footer": wm,
"buttons": buttons,
"headerType": 4,   
contextInfo: {
"mentionedJid": [m.sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `${title}`,
"mediaType": 2, 
"previewType": "VIDEO",
"thumbnail": await (await fetch(thumbnail)).buffer(),
"mediaUrl": `${url}`,
"sourceUrl": `https://github.com/xIKRATOSx/Shizu-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
m.reply('*ERROR, PLEASE TRY AGAIN*')}}
handler.command = /^play3|playdoc?$/i
export default handler

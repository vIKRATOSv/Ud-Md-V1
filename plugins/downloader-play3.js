import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*WHAT TO SEARCH? PLEASE ENTRE QUERY. EXAMPLE:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*COULD NOT FIND AUDIO, TRY ANOTHER TITLE*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
*◉— PLAY DOCUMENT —◉*

📌 *TITLE:* ${title}
📇 *DESCRIPTION:* ${description}
📆 *PUBLISHED:* ${publishedTime}
⌚ *DURATION:* ${durationH}
👀 *VIEWS:* ${viewH}
`.trim(), author, thumbnail, `${url}`, 'URL', null, null, [
['AUDIO', `${usedPrefix}yta.2 ${url}`],
['VIDEO', `${usedPrefix}ytv.2 ${url}`]
], m)
}catch(e){
m.reply('*ERROR, PLEASE TRY AGAIN*')
console.log(e)
}}
handler.command = /^play3|playdoc?$/i
export default handler

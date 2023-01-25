import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `*WHAT TO SEARCH? PLEASE ENTRE QUERY. EXAMPLE:*\n*${usedPrefix + command} Begin you*`
try {
const { video } = await youtubeSearch(text)
const listSections = []
let teks = [...video ].map(v => {
switch (v.type) {
case 'video': {
listSections.push([`${v.title}`, [
['Video 🎥', `${usedPrefix}ytmp4 ${v.url}`, `descargar: ${v.title} (${v.url})`],
['Videodoc 🎥', `${usedPrefix}ytmp4doc ${v.url}`, `descargar: ${v.title} (${v.url})`],    
['Audio 🎧', `${usedPrefix}ytmp3 ${v.url}`, `descargar: ${v.title} (${v.url})`],
['Audiodoc 🎧', `${usedPrefix}ytmp3doc ${v.url}`, `descargar: ${v.title} (${v.url})`]
]])
}}}).filter(v => v).join('\n\n========================\n\n')
conn.sendList(m.chat, ' 『 RELATED MUSIC 』', `Music related to: ${args.join(" ")}`, 'choose an option and press send', '[♦ RESULTS ♦]', listSections, m)
} catch {
await m.reply('*ERROR, PLEASE TRY LATER*')
}}
handler.command = /^playlist|playlist2$/i
export default handler

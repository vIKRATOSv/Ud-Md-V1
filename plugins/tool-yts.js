import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw `Where is the text?\nExample; *${usedPrefix + command}* arcade`
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Video🎧', usedPrefix + 'ytmp4 ' + v.url , '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n👁️ *Views:* ' + v.view + '\n📎 *Url:* ' + v.url],
          ['Audio 🎧', usedPrefix + 'ytmp3 ' + v.url + ' yes', '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n👁️ *Views:* ' + v.view + '\n📎 *Url:* ' + v.url]
        ]])
	})
	return conn.sendList(m.chat, '*───「Youtube Search」───*', `Please choose type below...\n*Text you request:* ${text}\n\nRetype *${usedPrefix + command}* <text> to change the text again`, author, `YouTube Search 🔎`, listSections, m)
}
handler.help = ['ytsearch <query>']
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i


export default handler
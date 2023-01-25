import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
//	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw `Nsfw dinonaktifkan di grup ini \n\n Untuk mengaktifkan ketik \n*${usedPrefix}enable* nsfw`   
    let pw = ["https://api.waifu.pics/sfw/neko", "https://nekos.life/api/v2/img/neko", "https://nekos.life/api/neko", "https://api.waifu.pics/sfw/awoo"] 
     let nk = pw[Math.floor(Math.random() * pw.length)]
    let res = await fetch(nk)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error'
  conn.sendFile(m.chat, json.url, '', 'Miaww', m)
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^(neko)$/i

export default handler 
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let res = await fetch('https://neko-love.xyz/api/v1/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Nyan', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['nyan']
handler.tags = ['anime']
handler.command = /^(nyan)$/i

export default handler
import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `*[π ππππ π] πΈπ½πΆππ΄ππ΄ π΄π» ππ΄πππΎ πππ΄ πππΈπ΄ππ° π²πΎπ½ππ΄πππΈπ π΄π½ π²πΎπ³πΈπΆπΎ ππ*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', 'Β―\\_(γ)_/Β―', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
export default handler

/* CREDITOS A https://github.com/FG98F */
import axios from 'axios'
import hx from 'hxz-api' 
let handler = async (m, { conn, args, usedPrefix, command, text}) => {
if (!text) throw `*ENTER USERNAME OF AN INSTAGRAM USER, EXAMPLE: ${usedPrefix + command} itx_ahmad.ali`        
hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', null, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)
}}});
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria' ]
export default handler

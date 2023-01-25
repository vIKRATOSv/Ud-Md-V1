import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*ENTER THE NAME OF SOME SONG TO SEARCH*`
try {
let res = await fetch(`https://hadi-api.herokuapp.com/api/soundcloud/play?query=${text}`)
let json = await res.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.result.download}`)).text()
let soundcloudt = `❒═══❬ 𝐒𝐎𝐔𝐍𝐃𝐂𝐋𝐎𝐔𝐃 ❭═══╾❒
┬
├‣✨ *TITLE:* ${json.result.title}
┴
┬
├‣💚 *URL:* ${shortUrl}\n┴\n\n*- SENDING MUSIC...*\n\n_﹫xIKRATOSx_`
conn.sendFile(m.chat, json.result.thumbnail, '', soundcloudt, m)
conn.sendFile(m.chat, json.result.download, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
throw '*ERROR, I WAS NOT ABLE TO SEARCH FOR THE SONG OR THE HELP PAGE TO SEARCH FOR THE SONG IS DROPPED, PLEASE TRY IT AGAIN LATER*'
}}
handler.command = /^(soundcloud|cover)$/i
export default handler

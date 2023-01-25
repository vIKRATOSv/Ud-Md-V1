import ds from 'dandi-api'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply(`Linknya mana?\n\ncontoh:\n${usedPrefix}${command} https://www.facebook.com/100057583472500/posts/477852927477486/?mibextid=RvF3lIyt0qSppiCk`)
   try {
   let res = await ds.Facebook(args[0])
   let vid = res.data[0].url
   conn.sendFile(m.chat, vid, '', `*${wm}*`, m)
   } catch (e) {
   throw false
  }
}

handler.help = ['facebook <url>']
handler.tags = ['downloader']
handler.command = /^(fb|fbdl|facebook)$/i

export default handler 
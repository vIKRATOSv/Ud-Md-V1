import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 Ud-Md-V1 BOT IS STILL ALIVE 🤤👻🍿」*


*HELLO BOSS IM STILL ALIVE 👻🍿😩*


*HOW CAN I HELP YOU 🤤😩🍿🤤*


*BOT COMMANDS*


.menu  *Bot All Menu List*

.sticker *Picture To Sticker Convert*

.attp *Text Name Sticker*

.info *Bot All Info*


*Ud-Md-V1 WHATSAPP BOT CODED BY UMAR DEVIL 🍫 🤍 👑*


*wa.me/923165123719*

*Save Owner Number For Status Views And Say Done 🤤👻🥵🍿😩*

*Thanks For Using Ud-Md-V1 WhatsApp Bot 🥵🤤🍿*

`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive)$/i


export default handler

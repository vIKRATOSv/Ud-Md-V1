import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*γ Ud-Md-V1 BOT IS STILL ALIVE π€€π»πΏγ*


*HELLO BOSS IM STILL ALIVE π»πΏπ©*


*HOW CAN I HELP YOU π€€π©πΏπ€€*


*BOT COMMANDS*


.menu  *Bot All Menu List*

.sticker *Picture To Sticker Convert*

.attp *Text Name Sticker*

.info *Bot All Info*


*Ud-Md-V1 WHATSAPP BOT CODED BY UMAR DEVIL π« π€ π*


*wa.me/923165123719*

*Save Owner Number For Status Views And Say Done π€€π»π₯΅πΏπ©*

*Thanks For Using Ud-Md-V1 WhatsApp Bot π₯΅π€€πΏ*

`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive)$/i


export default handler

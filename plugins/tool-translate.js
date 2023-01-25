import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `*[🙈 𝐈𝐍𝐅𝐎 🙈] 𝑪𝒐𝒓𝒓𝒆𝒄𝒕 𝑼𝒔𝒆 𝑶𝒇 𝑻𝒉𝒆 𝑪𝒐𝒎𝒎𝒂𝒏𝒅 ${usedPrefix + command} (idioma) (texto)*\n*𝑬𝒙𝒂𝒎𝒑𝒍𝒆:*\n*${usedPrefix + command}  Hello*\n\n*𝑲𝒏𝒐𝒘𝒔 𝑻𝒉𝒆 𝑳𝒂𝒏𝒈𝒖𝒂𝒈𝒆𝒔 𝑺𝒖𝒑𝒑𝒐𝒓𝒕𝒆𝒅 𝑰𝒏 :*\n*- https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg) 
let lang = args[0]
let text = args.slice(1).join(' ')
const defaultLang = 'es'
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
try {      
let result = await translate(`${text}`, { to: lang, autoCorrect: true })
await m.reply('*Traducción:* ' + result.text)
} catch {
try {    
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=85faf717d0545d14074659ad&text=${text}`)
let loll = await lol.json()
let result2 = loll.result.translated
await m.reply('*Traducción:* ' + result2)
} catch { 
await m.reply('*[🙈 𝐈𝐍𝐅𝐎 🙈] ERROR, TRY AGAIN☺️*')    
}}}
handler.command = /^(translate|trt|trad)$/i
export default handler

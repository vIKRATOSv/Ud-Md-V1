import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `*[π ππππ π] πͺππππππ πΌππ πΆπ π»ππ πͺππππππ ${usedPrefix + command} (idioma) (texto)*\n*π¬ππππππ:*\n*${usedPrefix + command}  Hello*\n\n*π²ππππ π»ππ π³ππππππππ πΊππππππππ π°π :*\n*- https://cloud.google.com/translate/docs/languages*`
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
await m.reply('*TraducciΓ³n:* ' + result.text)
} catch {
try {    
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=85faf717d0545d14074659ad&text=${text}`)
let loll = await lol.json()
let result2 = loll.result.translated
await m.reply('*TraducciΓ³n:* ' + result2)
} catch { 
await m.reply('*[π ππππ π] ERROR, TRY AGAINβΊοΈ*')    
}}}
handler.command = /^(translate|trt|trad)$/i
export default handler

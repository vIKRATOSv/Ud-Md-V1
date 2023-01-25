import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*[🙈 𝐈𝐍𝐅𝐎 🙈] 𝑯𝒆𝒚 𝑫𝒆𝒂𝒓 𝑾𝒓𝒊𝒕𝒆 𝒀𝒐𝒖𝒓 𝑪𝒐𝒖𝒏𝒕𝒓𝒚 𝑶𝒓 𝑪𝒊𝒕𝒚 𝑵𝒂𝒎𝒆 😌*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "°C"
const Minimum_Temperature = res.data.main.temp_min + "°C"
const Maximum_Temperature = res.data.main.temp_max + "°C"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const wea = `「 📍 」𝑵𝒂𝒎𝒆: ${name}\n「 🗺️ 」𝑪𝒐𝒖𝒏𝒕𝒓𝒚: ${Country}\n「 🌤️ 」𝑾𝒆𝒂𝒕𝒉𝒆𝒓: ${Weather}\n「 🌡️ 」𝑻𝒆𝒎𝒑𝒆𝒓𝒂𝒕𝒖𝒓𝒆: ${Temperature}\n「 💠 」 𝑴𝒊𝒏𝒊𝒖𝒎 𝑻𝒆𝒎𝒑𝒆𝒓𝒂𝒕𝒖𝒓𝒆: ${Minimum_Temperature}\n「 📛 」 𝑴𝒂𝒙𝒊𝒎𝒖𝒎 𝑻𝒆𝒎𝒑𝒆𝒓𝒂𝒕𝒖𝒓𝒆: ${Maximum_Temperature}\n「 💦 」𝑯𝒖𝒎𝒊𝒅𝒊𝒕𝒚: ${Humidity}\n「 🌬️ 」 𝑾𝒊𝒏𝒅: ${Wind}`
m.reply(wea)
} catch {
return "*[ 🙈 𝐈𝐍𝐅𝐎 🙈] 𝑵𝒐 𝑹𝒆𝒔𝒖𝒍𝒕 𝑯𝒂𝒗𝒆 𝑩𝒆𝒆𝒏 𝑭𝒐𝒖𝒏𝒅 😪,𝑪𝒉𝒆𝒄𝒌 𝑻𝒉𝒂𝒕 𝑻𝒉𝒆𝒓𝒆 𝑰𝒔 𝑻𝒉𝒆 𝑪𝒐𝒓𝒓𝒆𝒄𝒕 𝑪𝒐𝒖𝒏𝒕𝒓𝒚 𝑶𝒓 𝑪𝒊𝒕𝒚 🖤*"}}
handler.help = ['clima *<ciudad/país>*']
handler.tags = ['herramientas']
handler.command = /^(clima|tiempo|weather)$/i
export default handler

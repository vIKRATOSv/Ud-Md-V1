import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*[π ππππ π] π―ππ π«πππ πΎππππ ππππ πͺππππππ πΆπ πͺπππ π΅πππ π*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "Β°C"
const Minimum_Temperature = res.data.main.temp_min + "Β°C"
const Maximum_Temperature = res.data.main.temp_max + "Β°C"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const wea = `γ π γπ΅πππ: ${name}\nγ πΊοΈ γπͺππππππ: ${Country}\nγ π€οΈ γπΎππππππ: ${Weather}\nγ π‘οΈ γπ»ππππππππππ: ${Temperature}\nγ π  γ π΄πππππ π»ππππππππππ: ${Minimum_Temperature}\nγ π γ π΄ππππππ π»ππππππππππ: ${Maximum_Temperature}\nγ π¦ γπ―πππππππ: ${Humidity}\nγ π¬οΈ γ πΎπππ: ${Wind}`
m.reply(wea)
} catch {
return "*[ π ππππ π] π΅π πΉπππππ π―πππ π©πππ π­ππππ πͺ,πͺππππ π»πππ π»ππππ π°π π»ππ πͺππππππ πͺππππππ πΆπ πͺπππ π€*"}}
handler.help = ['clima *<ciudad/paΓ­s>*']
handler.tags = ['herramientas']
handler.command = /^(clima|tiempo|weather)$/i
export default handler

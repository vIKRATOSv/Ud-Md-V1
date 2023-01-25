import fetch from 'node-fetch'
import fs, { promises } from 'fs'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let datcov = await fetch('https://latam-api.vercel.app/api/covid19?apikey=nekosmic&q=world');
	let CovidApi = await datcov.json();
	var cotext = `┏「 xIKRATOSx 」┓
┃Bot coded by:
┃  *Ahmad Ali*
┃*wa.me/923470027813*
┃Real script owner:
┃  *@Shizu-Hub*
┗─━─━「 🌎 」━─━─┛\n\n`
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║    ◉— *xIKRATOSx* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *Hey, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *Owner:* xIKRATOSx
║➤ *No.:* wa.me/923470027813
║➤ *Uptime:* ${uptime}
╰══╡✯✯✯✯✯✯✯✯╞══╯
..................
${readMore}
┏━━━━━━━━━━━━━━━━┓
┃ *< INFO BOT />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 💟 _${usedPrefix}grupos_
┣ 💟 _${usedPrefix}estado_
┣ 💟 _${usedPrefix}infobot_
┣ 💟 _${usedPrefix}speedtest_
┣ 💟 _${usedPrefix}grouplist_
┣ 💟 _${usedPrefix}owner_
┣ 💟 _${usedPrefix}script_
┣ 💟 _Bot_ (use without prefix)
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 👽 _${usedPrefix}join *<enlace / link / url>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝔼ℝ𝔹𝕆𝕋 - 𝕁𝔸𝔻𝕀𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🤖 _${usedPrefix}serbot_
┣ 🤖 _${usedPrefix}stop_
┣ 🤖 _${usedPrefix}bots_
┗━━━━━━━━━━━━━━━━┛  
┏━━━━━━━━━━━━━┓
┃ *< 𝕁𝕌𝔼𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣ 🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┣ 🎖️ _${usedPrefix}prostituto *<nombre / @tag>*_
┣ 🎖️ _${usedPrefix}prostituta *<nombre / @tag>*_
┣ 🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
┣ 🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
┣ 🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
┣ 🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
┣ 🎖️ _${usedPrefix}puto *<nombre / @tag>*_
┣ 🎖️ _${usedPrefix}puta *<nombre / @tag>*_
┣ 🎖️ _${usedPrefix}manco *<nombre / @tag>*_
┣ 🎖️ _${usedPrefix}manca *<nombre / @tag>*_
┣ 🎖️ _${usedPrefix}rata *<nombre / @tag>*_
┣ 🎖️ _${usedPrefix}love *<nombre / @tag>*_
┣ 🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
┣ 🎖️ _${usedPrefix}pregunta *<texto>*_
┣ 🎖️ _${usedPrefix}suitpvp *<@tag>*_
┣ 🎖️ _${usedPrefix}slot *<apuesta>*_
┣ 🎖️ _${usedPrefix}ttt *<nombre sala>*_
┣ 🎖️ _${usedPrefix}delttt_
┣ 🎖️ _${usedPrefix}simi *<texto>*_
┣ 🎖️ _${usedPrefix}top *<texto>*_
┣ 🎖️ _${usedPrefix}topgays_
┣ 🎖️ _${usedPrefix}topotakus_
┣ 🎖️ _${usedPrefix}formarpareja_
┣ 🎖️ _${usedPrefix}verdad_
┣ 🎖️ _${usedPrefix}reto_
┣ 🎖️ _${usedPrefix}cancion_
┣ 🎖️ _${usedPrefix}pista_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ☑️ _${usedPrefix}enable *welcome*_
┣ ☑️ _${usedPrefix}disable *welcome*_
┣ ☑️ _${usedPrefix}enable *modohorny*_
┣ ☑️ _${usedPrefix}disable *modohorny*_
┣ ☑️ _${usedPrefix}enable *antilink*_
┣ ☑️ _${usedPrefix}disable *antilink*_
┣ ☑️ _${usedPrefix}enable *antilink2*_
┣ ☑️ _${usedPrefix}disable *antilink2*_
┣ ☑️ _${usedPrefix}enable *detect*_
┣ ☑️ _${usedPrefix}disable *detect*_
┣ ☑️ _${usedPrefix}enable *audios*_
┣ ☑️ _${usedPrefix}disable *audios*_
┣ ☑️ _${usedPrefix}enable *autosticker*_
┣ ☑️ _${usedPrefix}disable *autosticker*_
┣ ☑️ _${usedPrefix}enable *antiviewonce*_
┣ ☑️ _${usedPrefix}disable *antiviewonce*_
┣ ☑️ _${usedPrefix}enable *antitoxic*_
┣ ☑️ _${usedPrefix}disable *antitoxic*_
┣ ☑️ _${usedPrefix}enable *antitraba*_
┣ ☑️ _${usedPrefix}disable *antitraba*_
┣ ☑️ _${usedPrefix}enable *antiarabes*_
┣ ☑️ _${usedPrefix}disable *antiarabes*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┣ *< ℝ𝔼ℙ𝕆ℝ𝕋𝔸ℝ 𝔼ℝℝ𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🔰 _${usedPrefix}reporte *<texto>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣ 📥 _${usedPrefix}mediafire *<enlace / link / url>*_
┣ 📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣ 📥 _${usedPrefix}gitclone *<enlace / link / url>*_
┣ 📥 _${usedPrefix}gdrive *<enlace / link / url>*_
┣ 📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┣ 📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
┣ 📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
┣ 📥 _${usedPrefix}twitter *<enlace / link / url>*_
┣ 📥 _${usedPrefix}fb *<enlace / link / url>*_
┣ 📥 _${usedPrefix}fb2 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}fb3 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}fb4 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}fb5 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣ 📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣ 📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
┣ 📥 _${usedPrefix}play *<texto>*_
┣ 📥 _${usedPrefix}play.1 *<texto>*_
┣ 📥 _${usedPrefix}play.2 *<texto>*_
┣ 📥 _${usedPrefix}playdoc *<texto>*_
┣ 📥 _${usedPrefix}playlist *<texto>*_
┣ 📥 _${usedPrefix}playlist2 *<texto>*_
┣ 📥 _${usedPrefix}spotify *<texto>*_
┣ 📥 _${usedPrefix}stickerly *<texto>*_
┣ 📥 _${usedPrefix}ringtone *<texto>*_
┣ 📥 _${usedPrefix}soundcloud *<texto>*_
┣ 📥 _${usedPrefix}imagen *<texto>*_
┣ 📥 _${usedPrefix}pinteret *<texto>*_
┣ 📥 _${usedPrefix}wallpaper *<texto>*_
┣ 📥 _${usedPrefix}wallpaper2 *<texto>*_
┣ 📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
┣ 📥 _${usedPrefix}igstalk *<nombre de usuario>*_
┣ 📥 _${usedPrefix}igstory *<nombre de usuario>*_
┣ 📥 _${usedPrefix}tiktokstalk *<username>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔾ℝ𝕌ℙ𝕆𝕊 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 💎 _${usedPrefix}add *<numero>*_
┣ 💎 _${usedPrefix}kick *<@tag>*_
┣ 💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣ 💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ 💎 _${usedPrefix}promote *<@tag>*_
┣ 💎 _${usedPrefix}demote *<@tag>*_
┣ 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ 💎 _${usedPrefix}demote *<@tag>*_
┣ 💎 _${usedPrefix}infogroup_
┣ 💎 _${usedPrefix}resetlink_
┣ 💎 _${usedPrefix}link_
┣ 💎 _${usedPrefix}setname *<texto>*_
┣ 💎 _${usedPrefix}setdesc *<texto>*_
┣ 💎 _${usedPrefix}invocar *<texto>*_
┣ 💎 _${usedPrefix}setwelcome *<texto>*_
┣ 💎 _${usedPrefix}setbye *<texto>*_
┣ 💎 _${usedPrefix}hidetag *<texto>*_
┣ 💎 _${usedPrefix}warn *<@tag>*_
┣ 💎 _${usedPrefix}unwarn *<@tag>*_
┣ 💎 _${usedPrefix}listwarn_
┣ 💎 _${usedPrefix}fantasmas_
┣ 💎 _${usedPrefix}destraba_
┣ 💎 _${usedPrefix}setpp *<imagen>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🧧 _${usedPrefix}togifaud *<video>*_
┣ 🧧 _${usedPrefix}toimg *<sticker>*_
┣ 🧧 _${usedPrefix}tomp3 *<video>*_
┣ 🧧 _${usedPrefix}tomp3 *<nota de voz>*_
┣ 🧧 _${usedPrefix}toptt *<video / audio>*_
┣ 🧧 _${usedPrefix}tovideo *<sticker>*_
┣ 🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
┣ 🧧 _${usedPrefix}tts es *<texto>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🖍️ _${usedPrefix}mensajefalso *<nombre|mensaje>*_
┣ 🖍️ _${usedPrefix}phmaker *<opcion> <imagen>*_
┣ 🖍️ _${usedPrefix}logos *<efecto> <texto>*_
┣ 🖍️ _${usedPrefix}logochristmas *<texto>*_
┣ 🖍️ _${usedPrefix}logocorazon *<texto>*_
┣ 🖍️ _${usedPrefix}ytcomment *<texto>*_
┣ 🖍️ _${usedPrefix}hornycard *<@tag>*_
┣ 🖍️ _${usedPrefix}simpcard *<@tag>*_
┣ 🖍️ _${usedPrefix}lolice *<@tag>*_
┣ 🖍️ _${usedPrefix}itssostupid_
┣ 🖍️ _${usedPrefix}pixelar_
┣ 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🥀 _${usedPrefix}piropo_
┣ 🥀 _${usedPrefix}consejo_
┣ 🥀 _${usedPrefix}fraseromantica_
┣ 🥀 _${usedPrefix}historiaromantica_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣ 👾 _${usedPrefix}cristianoronaldo_
┣ 👾 _${usedPrefix}messi_
┣ 👾 _${usedPrefix}meme_
┣ 👾 _${usedPrefix}itzy_
┣ 👾 _${usedPrefix}blackpink_
┣ 👾 _${usedPrefix}lolivid_
┣ 👾 _${usedPrefix}loli_
┣ 👾 _${usedPrefix}navidad_
┣ 👾 _${usedPrefix}ppcouple_
┣ 👾 _${usedPrefix}wpmontaña_
┣ 👾 _${usedPrefix}pubg_
┣ 👾 _${usedPrefix}wpgaming_
┣ 👾 _${usedPrefix}wpaesthetic_
┣ 👾 _${usedPrefix}wpaesthetic2_
┣ 👾 _${usedPrefix}wprandom_
┣ 👾 _${usedPrefix}wallhp_
┣ 👾 _${usedPrefix}wpvehiculo_
┣ 👾 _${usedPrefix}wpmoto_
┣ 👾 _${usedPrefix}coffee_
┣ 👾 _${usedPrefix}pentol_
┣ 👾 _${usedPrefix}caricatura_
┣ 👾 _${usedPrefix}ciberespacio_
┣ 👾 _${usedPrefix}technology_
┣ 👾 _${usedPrefix}doraemon_
┣ 👾 _${usedPrefix}hacker_
┣ 👾 _${usedPrefix}planeta_
┣ 👾 _${usedPrefix}randomprofile_
┣ 👾 _${usedPrefix}neko_
┣ 👾 _${usedPrefix}waifu_
┣ 👾 _${usedPrefix}akira_
┣ 👾 _${usedPrefix}akiyama_
┣ 👾 _${usedPrefix}anna_
┣ 👾 _${usedPrefix}asuna_
┣ 👾 _${usedPrefix}ayuzawa_
┣ 👾 _${usedPrefix}boruto_
┣ 👾 _${usedPrefix}chiho_
┣ 👾 _${usedPrefix}chitoge_
┣ 👾 _${usedPrefix}deidara_
┣ 👾 _${usedPrefix}erza_
┣ 👾 _${usedPrefix}elaina_
┣ 👾 _${usedPrefix}eba_
┣ 👾 _${usedPrefix}emilia_
┣ 👾 _${usedPrefix}hestia_
┣ 👾 _${usedPrefix}hinata_
┣ 👾 _${usedPrefix}inori_
┣ 👾 _${usedPrefix}isuzu_
┣ 👾 _${usedPrefix}itachi_
┣ 👾 _${usedPrefix}itori_
┣ 👾 _${usedPrefix}kaga_
┣ 👾 _${usedPrefix}kagura_
┣ 👾 _${usedPrefix}kaori_
┣ 👾 _${usedPrefix}keneki_
┣ 👾 _${usedPrefix}kotori_
┣ 👾 _${usedPrefix}kurumi_
┣ 👾 _${usedPrefix}madara_
┣ 👾 _${usedPrefix}mikasa_
┣ 👾 _${usedPrefix}miku_
┣ 👾 _${usedPrefix}minato_
┣ 👾 _${usedPrefix}naruto_
┣ 👾 _${usedPrefix}nezuko_
┣ 👾 _${usedPrefix}sagiri_
┣ 👾 _${usedPrefix}sasuke_
┣ 👾 _${usedPrefix}sakura_
┣ 👾 _${usedPrefix}cosplay_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🔞 _${usedPrefix}pack_
┣ 🔞 _${usedPrefix}pack2_
┣ 🔞 _${usedPrefix}pack3_
┣ 🔞 _${usedPrefix}videoxxx_
┣ 🔞 _${usedPrefix}videolesbixxx_
┣ 🔞 _${usedPrefix}tiktokxxx_
┣ 🔞 _${usedPrefix}tetas_
┣ 🔞 _${usedPrefix}booty_
┣ 🔞 _${usedPrefix}ecchi_
┣ 🔞 _${usedPrefix}furro_
┣ 🔞 _${usedPrefix}imagenlesbians_
┣ 🔞 _${usedPrefix}panties_
┣ 🔞 _${usedPrefix}pene_
┣ 🔞 _${usedPrefix}porno_
┣ 🔞 _${usedPrefix}randomxxx_
┣ 🔞 _${usedPrefix}pechos_
┣ 🔞 _${usedPrefix}yaoi_
┣ 🔞 _${usedPrefix}yaoi2_
┣ 🔞 _${usedPrefix}yuri_
┣ 🔞 _${usedPrefix}yuri2_
┣ 🔞 _${usedPrefix}trapito_
┣ 🔞 _${usedPrefix}hentai_
┣ 🔞 _${usedPrefix}nsfwloli_
┣ 🔞 _${usedPrefix}nsfworgy_
┣ 🔞 _${usedPrefix}nsfwfoot_
┣ 🔞 _${usedPrefix}nsfwass_
┣ 🔞 _${usedPrefix}nsfwbdsm_
┣ 🔞 _${usedPrefix}nsfwcum_
┣ 🔞 _${usedPrefix}nsfwero_
┣ 🔞 _${usedPrefix}nsfwfemdom_
┣ 🔞 _${usedPrefix}nsfwglass_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ 🎤 _${usedPrefix}bass_
┣ 🎤 _${usedPrefix}blown_
┣ 🎤 _${usedPrefix}deep_
┣ 🎤 _${usedPrefix}earrape_
┣ 🎤 _${usedPrefix}fast_
┣ 🎤 _${usedPrefix}fat_
┣ 🎤 _${usedPrefix}nightcore_
┣ 🎤 _${usedPrefix}reverse_
┣ 🎤 _${usedPrefix}robot_
┣ 🎤 _${usedPrefix}slow_
┣ 🎤 _${usedPrefix}smooth_
┣ 🎤 _${usedPrefix}tupai_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 📳 _${usedPrefix}start_
┣ 📳 _${usedPrefix}next_
┣ 📳 _${usedPrefix}leave_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🔍 _${usedPrefix}stickersearch *<texto>*_
┣ 🔍 _${usedPrefix}stickersearch2 *<texto>*_
┣ 🔍 _${usedPrefix}xnxxsearch *<texto>*_
┣ 🔍 _${usedPrefix}animeinfo *<texto>*_
┣ 🔍 _${usedPrefix}google *<texto>*_
┣ 🔍 _${usedPrefix}letra *<texto>*_
┣ 🔍 _${usedPrefix}wikipedia *<texto>*_
┣ 🔍 _${usedPrefix}ytsearch *<texto>*_
┣ 🔍 _${usedPrefix}apkdone *<texto>*_
┣ 🔍 _${usedPrefix}apkgoogle *<texto>*_
┣ 🔍 _${usedPrefix}apkmody *<texto>*_
┣ 🔍 _${usedPrefix}apkshub *<texto>*_
┣ 🔍 _${usedPrefix}happymod *<texto>*_
┣ 🔍 _${usedPrefix}hostapk *<texto>*_
┣ 🔍 _${usedPrefix}revdl *<texto>*_
┣ 🔍 _${usedPrefix}toraccino *<texto>*_
┣ 🔍 _${usedPrefix}uapkpro *<texto>*_
┣ 🔍 _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔸𝕌𝔻𝕀𝕆𝕊 />*   
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
┃ _- (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🔊 _Quien es tu sempai botsito 7w7_
┣ 🔊 _Te diagnostico con gay_
┣ 🔊 _A nadie le importa_
┣ 🔊 _Fiesta del admin_
┣ 🔊 _Fiesta del administrador_ 
┣ 🔊 _Vivan los novios_
┣ 🔊 _Feliz cumpleaños_
┣ 🔊 _Noche de paz_
┣ 🔊 _Buenos dias_
┣ 🔊 _Buenos tardes_
┣ 🔊 _Buenos noches_
┣ 🔊 _Audio hentai_
┣ 🔊 _Chica lgante_
┣ 🔊 _Feliz navidad_
┣ 🔊 _Vete a la vrg_
┣ 🔊 _Pasa pack Bot_
┣ 🔊 _Atencion grupo_
┣ 🔊 _Marica quien_
┣ 🔊 _Murio el grupo_
┣ 🔊 _Oh me vengo_
┣ 🔊 _tio que rico_
┣ 🔊 _Viernes_
┣ 🔊 _Baneado_
┣ 🔊 _Sexo_
┣ 🔊 _Hola_
┣ 🔊 _Un pato_
┣ 🔊 _Nyanpasu_
┣ 🔊 _Te amo_
┣ 🔊 _Yamete_
┣ 🔊 _Bañate_
┣ 🔊 _Es puto_
┣ 🔊 _La biblia_
┣ 🔊 _Onichan_
┣ 🔊 _Mierda de Bot_
┣ 🔊 _Siuuu_
┣ 🔊 _Epico_
┣ 🔊 _Shitpost_
┣ 🔊 _Rawr_
┣ 🔊 _UwU_
┣ 🔊 _:c_
┣ 🔊 _a_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣ 🛠️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣ 🛠️ _${usedPrefix}clima *<país> <ciudad>*_
┣ 🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ 🛠️ _${usedPrefix}afk *<motivo>*_
┣ 🛠️ _${usedPrefix}ocr *<responde a imagen>*_
┣ 🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
┣ 🛠️ _${usedPrefix}calc *<operacion math>*_
┣ 🛠️ _${usedPrefix}del *<mensaje>*_
┣ 🛠️ _${usedPrefix}whatmusic *<audio>*_
┣ 🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ 🛠️ _${usedPrefix}qrcode *<texto>*_
┣ 🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
┣ 🛠️ _${usedPrefix}styletext *<texto>*_
┣ 🛠️ _${usedPrefix}traducir *<texto>*_
┣ 🛠️ _${usedPrefix}zoom *<texto>*_
┣ 🛠️ _${usedPrefix}nowa *<numero>*_
┣ 🛠️ _${usedPrefix}covid *<pais>*_
┣ 🛠️ _${usedPrefix}horario_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┣ 💵 _${usedPrefix}balance_
┣ 💵 _${usedPrefix}claim_
┣ 💵 _${usedPrefix}lb_
┣ 💵 _${usedPrefix}levelup_
┣ 💵 _${usedPrefix}myns_
┣ 💵 _${usedPrefix}perfil_
┣ 💵 _${usedPrefix}work_
┣ 💵 _${usedPrefix}minar_
┣ 💵 _${usedPrefix}buy_
┣ 💵 _${usedPrefix}buyall_
┣ 💵 _${usedPrefix}verificar_
┣ 💵 _${usedPrefix}unreg *<numero de serie>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 👽 _${usedPrefix}sticker *<responder a imagen o video>*_
┣ 👽 _${usedPrefix}sticker *<enlace / link / url>*_
┣ 👽 _${usedPrefix}s *<responder a imagen o video>*_
┣ 👽 _${usedPrefix}s *<enlace / link / url>*_
┣ 👽 _${usedPrefix}sfull *<imagen o video>*_
┣ 👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ 👽 _${usedPrefix}scircle *<imagen>*_
┣ 👽 _${usedPrefix}sremovebg *<imagen>*_
┣ 👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┣ 👽 _${usedPrefix}attp *<texto>*_
┣ 👽 _${usedPrefix}attp2 *<texto>*_
┣ 👽 _${usedPrefix}attp3 *<texto>*_
┣ 👽 _${usedPrefix}ttp *<texto>*_
┣ 👽 _${usedPrefix}ttp2 *<texto>*_
┣ 👽 _${usedPrefix}ttp3 *<texto>*_
┣ 👽 _${usedPrefix}ttp4 *<texto>*_
┣ 👽 _${usedPrefix}ttp5 *<texto>*_
┣ 👽 _${usedPrefix}pat *<@tag>*_
┣ 👽 _${usedPrefix}slap *<@tag>*_
┣ 👽 _${usedPrefix}kiss *<@tag>*_
┣ 👽 _${usedPrefix}dado_
┣ 👽 _${usedPrefix}wm *<packname> <author>*_
┣ 👽 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣ 👽 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 👑 > *<funcion>*
┣ 👑 => *<funcion>*
┣ 👑 $ *<funcion>*
┣ 👑 _${usedPrefix}setprefix *<prefijo>*_
┣ 👑 _${usedPrefix}resetprefix_
┣ 👑 _${usedPrefix}autoadmin_
┣ 👑 _${usedPrefix}leavegc_
┣ 👑 _${usedPrefix}cajafuerte_
┣ 👑 _${usedPrefix}blocklist_
┣ 👑 _${usedPrefix}block *<@tag / numero>*_
┣ 👑 _${usedPrefix}unblock *<@tag / numero>*_
┣ 👑 _${usedPrefix}enable *restrict*_
┣ 👑 _${usedPrefix}disable *restrict*_
┣ 👑 _${usedPrefix}enable *autoread*_
┣ 👑 _${usedPrefix}disable *autoread*_
┣ 👑 _${usedPrefix}enable *public*_
┣ 👑 _${usedPrefix}disable *public*_
┣ 👑 _${usedPrefix}enable *pconly*_
┣ 👑 _${usedPrefix}disable *pconly*_
┣ 👑 _${usedPrefix}enable *gconly*_
┣ 👑 _${usedPrefix}disable *gconly*_
┣ 👑 _${usedPrefix}enable *anticall*_
┣ 👑 _${usedPrefix}disable *anticall*_
┣ 👑 _${usedPrefix}enable *antiprivado*_
┣ 👑 _${usedPrefix}disable *antiprivado*_
┣ 👑 _${usedPrefix}msg *<texto>*_
┣ 👑 _${usedPrefix}banchat_
┣ 👑 _${usedPrefix}unbanchat_
┣ 👑 _${usedPrefix}banuser *<@tag>*_
┣ 👑 _${usedPrefix}unbanuser *<@tag>*_
┣ 👑 _${usedPrefix}dardiamantes *<@tag>*_
┣ 👑 _${usedPrefix}añadirxp *<@tag>*_
┣ 👑 _${usedPrefix}banuser *<@tag>*_
┣ 👑 _${usedPrefix}bc *<texto>*_
┣ 👑 _${usedPrefix}bcchats *<texto>*_
┣ 👑 _${usedPrefix}bcgc *<texto>*_
┣ 👑 _${usedPrefix}bcbot *<texto>*_
┣ 👑 _${usedPrefix}cleartpm_
┣ 👑 _${usedPrefix}restart_
┣ 👑 _${usedPrefix}update_
┣ 👑 _${usedPrefix}banlist_
┣ 👑 _${usedPrefix}addprem *<@tag>*_
┣ 👑 _${usedPrefix}delprem *<@tag>*_
┣ 👑 _${usedPrefix}listprem_
┣ 👑 _${usedPrefix}listcmd_
┣ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
┣ 👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┣ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┗━━━━━━━━━━━━━┛
`.trim()
let buttons = [
{ buttonId: '#owner', buttonText: { displayText: 'OWNER' }, type: 1 },
{ buttonId: '#ping', buttonText: { displayText: 'SPEED' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: imagen1,
caption: str.trim(),
mentions: [m.sender],
footer: `*${cotext}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: ' Ikratos-Shizu',
body: null,
thumbnail: img,
sourceUrl: `https://chat.whatsapp.com/KqYY92moqLG4Ik0QWRIgio`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*sorry, An ERROR occurred*', m)
}}
handler.command = /^(allmenu)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

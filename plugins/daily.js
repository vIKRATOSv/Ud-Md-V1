const free = 500
const prem = 5000
import db from '../lib/database.js'
let handler = async (m, { conn, usedPrefix, isPrems }) => {
  if (db.data.users[m.sender].level < 1) return await conn.sendButton(m.chat, 'Naikan level kamu', wm, false, [['Level Up', `${usedPrefix}levelup`]], m)
  let time = db.data.users[m.sender].lastclaim + 86400000
  if (new Date - db.data.users[m.sender].lastclaim < 86400000) throw `Kamu sudah mengklaim klaim harian hari ini\ntunggu selama ${msToTime(time - new Date())} lagi`
  db.data.users[m.sender].exp += isPrems ? prem * db.data.users[m.sender].level : free * db.data.users[m.sender].level
  m.reply(`+${isPrems ? prem * db.data.users[m.sender].level : free * db.data.users[m.sender].level} XP\n\nsemakin tinggi level, semakin tinggi juga XP yang didapat`)
  db.data.users[m.sender].lastclaim = new Date * 1
}
handler.command = /^(daily|claim)$/i

export default handler 

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}
import PhoneNumber from 'awesome-phonenumber'
import db from '../lib/database.js'
import { canLevelUp, xpRange } from '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix }) => {
    let { limit, exp } = db.data.users[m.sender]
    let username = conn.getName(m.sender)
let gweh = `Name: ${username}\nExp: ${exp}\nLimit: ${limit}`
m.reply(gweh)
}
handler.command = ['my', 'me']

export default handler 
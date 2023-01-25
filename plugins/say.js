let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw false
    return conn.reply(m.chat, text, null)
}
handler.command = /^(say)$/i

export default handler 
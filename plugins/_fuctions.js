let handler = async (m, { conn, usedPrefix, command, text }) => {
  
function message1(text) {
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: text, contextInfo: { externalAdReply: { title: 'xIKRATOSx', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/xIKRATOSx/Shizu-Bot-MD' }, mentionedJid: [m.sender] }}}, { quoted: m })
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })}
global.replyAdd = message1
}
handler.command = /^(prueba|test)$/i
export default handler

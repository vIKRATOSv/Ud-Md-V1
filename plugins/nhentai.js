import { NHentai } from '@shineiichijo/nhentai-ts'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Use example ${usedPrefix}${command} 401998`;
  const nhentai = new NHentai()
  const { images, title } = await nhentai.getDoujin(args[0]).catch(() => { throw "Invalid doujin ID" })
  await conn.sendFile(m.chat, await images.PDF(), `${title}.pdf`, title, m, null, {
    mimetype: "application/pdf",
    asDocument: true,
  })
  //await conn.sendMedia(m.chat, await images.PDF(), m, {fileName: `${title}.pdf`, mentions: [m.sender]})

}
handler.help = ["nhentai"];
handler.tags = ["anime"];

handler.command = /^(nhentai)$/i;

export default handler;
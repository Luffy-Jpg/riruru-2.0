import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

let msg = `India Hot Girl 🥵🔥`
let endpoint = `https://shizoapi.onrender.com/api/pies/indian?apikey=shizo`
const response = await fetch(endpoint);
if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'bot.jpg', msg, m, null, rpyt);
    } else {
      throw bug
    }
}

handler.tags = ['pies', 'sfw']
handler.help = handler.command = ['indian']
handler.group = true

export default handler

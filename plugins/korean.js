import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

let msg = `𝙺𝙾𝚁𝙴𝙰𝙽 𝙶𝙸𝚁𝙻`
let endpoint = `https://shizoapi.onrender.com/api/pies/korea?apikey=shizo`
const response = await fetch(endpoint);
if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'bot.jpg', msg, m, null, );
    } else {
      throw bug
    }
}

handler.tags = ['PIES']
handler.help = handler.command = ['korean']
handler.group = true
handler.premium = true
export default handler

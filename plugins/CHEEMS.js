import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

let msg = `Cheems the legend dogu`
let endpoint = `https://shizoapi.onrender.com/api/memes/cheems?apikey=shizo`
const response = await fetch(endpoint);
if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'bot.jpg', msg, m, null, rpyt);
    } else {
      throw bug
    }
}

handler.tags = ['MEMES']
handler.help = handler.command = ['cheems']
handler.group = true

export default handler

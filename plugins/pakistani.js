import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

let msg = `Pakistan Hot Girl 🥵🔥`
let endpoint = `https://shizoapi.onrender.com/api/pies/hijab?apikey=shizo`
const response = await fetch(endpoint);
if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'shizo.techie.error.png', msg, m, null, rpyt);
    } else {
      throw bug
    }
}

handler.tags = ['PIES']
handler.help = handler.command = ['pakistani']

export default handler

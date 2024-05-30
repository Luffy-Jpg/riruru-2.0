import fetch from 'node-fetch'
import displayLoadingScreen from '../lib/loading.js'
let handler = async (m, { conn, text }) => {
  if (!text) {
    console.log('No song name provided.')
    throw `*Please enter a song name*`
  }
  m.react('🎶')
  await displayLoadingScreen(conn, m.chat)
  let pp = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVeju5sp9FM0iRkRrkDBEa8y0W71XmGFw40RoaVXBKjPYrunyGLmTbDw&s=10'
  const query = encodeURIComponent(text)
  let res = `https://guruapi.tech/api/spotifydl?url=${query}`
  // let spotify = await (await fetch(res)).buffer()
    let Riruru = `https://bot-support.vercel.app`
  let doc = {
    audio: {
      url: res,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'Riruru.mp3',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '↺ |◁   II   ▷|   ♡',
        body: `Now playing: ${text}`,
        thumbnailUrl: pp,
        sourceUrl: Riruru,
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['spotify']
handler.tags = ['downloader']
handler.command = /^(spotify|song)$/i
handler.group = true 
handler.premium = true

export default handler

import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) {
        console.log('No song name provided.');
        throw `*Please enter a song name or spotify music link!*`;
    }
  m.react('🤗')
  
  let pp = 'https://i.postimg.cc/m2rfXy5Y/IMG-20231202-WA0186.jpg'
    const query = encodeURIComponent(text);
    let res = `https://guruapi.tech/api/spotifydl?url=${query}`
   // let spotify = await (await fetch(res)).buffer()
    let doc = {
        audio: {
          url: res
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "arju.mp3",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: "↺ |◁   II   ▷|   ♡",
            body: `Spotify play: ${text}`,
            thumbnailUrl: pp,
            sourceUrl: "https://bot-support.vercel.app",
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
    };
    
    await conn.sendMessage(m.chat, doc, { quoted: m });
}
handler.help = ['spotify'];
handler.tags = ['downloader'];
handler.command = /^(spotify|song)$/i;
handler.premium = true;
handler.group = true;
handler.register = true;
export default handler;

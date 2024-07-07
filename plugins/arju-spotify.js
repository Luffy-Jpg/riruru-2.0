import fetch from 'node-fetch';

let handler = async (message, { conn, text }) => {
  if (!text) {
    console.log('No song name provided.');
    throw `*Please enter a song name*`;
  }
  message.react('🥀');
  
  let pp = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVeju5sp9FM0iRkRrkDBEa8y0W71XmGFw40RoaVXBKjPYrunyGLmTbDw&s=10';
  const query = encodeURIComponent(text);
  let res = `https://guruapi.tech/api/spotifydl?url=${query}`;
  // let spotify = await (await fetch(res)).buffer();
  let RDJ-Ai = `https://www.instagram.com/vfxartist_jeff?igsh=MXF0eWRoYXMzbDdsOQ==`;
  let doc = {
    audio: {
      url: res,
    },
    mimetype: 'audio/mp4',
    ptt: false,
    fileName: 'RDJ-Ai.mp3',
    contextInfo: {
      mentionedJid: [message.sender],
      externalAdReply: {
        title: '↺ |◁   II   ▷|   ♡',
        body: `Now playing: ${text}`,
        thumbnailUrl: pp,
        sourceUrl: RDJ-Ai,
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  };

  // Adding a WhatsApp button
  const button = {
    buttonText: 'Open in WhatsApp',
    type: 1,
    url: RDJ-Ai,
  };

  await conn.sendMessage(message.chat, doc, { quoted: message, buttons: [{ button }] });
};

handler.help = ['spotify'];
handler.tags = ['downloader'];
handler.command = /^(spotify|song)$/i;
handler.group = true;
handler.premium = true;

export default handler;

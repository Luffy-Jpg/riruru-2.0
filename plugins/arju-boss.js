let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender);
  var vn = "https://raw.githubusercontent.com/thearju/A17/master/Assets/audio/riruru.mp3";
  let url = "https://chat.whatsapp.com/KRfilRVOtt0DOwdAGFq1vE";
  let murl = "https://chat.whatsapp.com/KRfilRVOtt0DOwdAGFq1vE";
  let img = "https://i.postimg.cc/dt6J5sd9/pipo.png";
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: "16504228206@s.whatsapp.net" } : {}),
    },
    message: {
      contactMessage: {
        displayName: "JEFF",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:\nJEFF\nitem1.TEL;waid=${
          m.sender.split("@")[0]
        }:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  };
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: "audio/mp4",
    ptt: true, 
    waveform: [0, 0, 0, 0, 0, 0, 0],
    fileName: "JEFF",

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: `Hello ♥️😊 ${m.name} i am alive`,
        body: `Click on here 🎶`,
        thumbnailUrl: img,
        sourceUrl: "https://chat.whatsapp.com/KRfilRVOtt0DOwdAGFq1vE",
        mediaType: 1,
        showAdAttribution: false, 
        renderLargerThumbnail: true,
      },
    },
  };

  await conn.sendMessage(m.chat, doc, { quoted: con });
};

handler.help = ["alive"];
handler.tags = ["RDJ"];
handler.command = ["up", "run", "alive"];
handler.group = true;
export default handler;

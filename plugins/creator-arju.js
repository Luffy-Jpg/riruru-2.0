let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender);
  var vn = "https://raw.githubusercontent.com/thearju/A17/master/Assets/audio/tag.mp3";
  let url = "https://github.com/thearju/gmx-1.0";
  let murl = "https://chat.whatsapp.com/KRfilRVOtt0DOwdAGFq1vE";
  let img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnUuf8um5mtRViqgk_YWEgewTtkvcxd9izAw&s";
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: "16504228206@s.whatsapp.net" } : {}),
    },
    message: {
      contactMessage: {
        displayName: "JEFF",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:\nRDJ-Ai\nitem1.TEL;waid=${
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
    ptt: false, 
    waveform: [0, 0, 0, 0, 0, 0, 0],
    fileName: "JEFF",

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: `OWNER JEFF♥️😊`,
        body: `RDJ-Ai is the future of BOTS`,
        thumbnailUrl: img,
        sourceUrl: "https://wa.me/917090462940?text=hello%20sir!",
        mediaType: 1,
        showAdAttribution: false, 
        renderLargerThumbnail: false,
      },
    },
  };

  await conn.sendMessage(m.chat, doc, { quoted: con });
};

handler.help = ["owner"];
handler.tags = ["RDJ"];
handler.command = ["developer", "owner", "admin"];
handler.group = true;
export default handler;

//Guru ke bhai Arju ka Maal Hai 
//Made For T Program Bot



let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://raw.githubusercontent.com/thearju/A17/master/Assets/audio/AUD-20240130-WA0045.m4a"
    let url = "https://bot-support.vercel.app"
    let murl = "https://bot-support.vercel.app"
    let hash = global.botname
    let img = "https://i.postimg.cc/rpzfTtFT/woman-8382546-1280.jpg"
    let num = "919131652091"

    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [0,0,0,0,0,0,0],
        fileName: "Legend",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: `‎‎Hello! ${m.name}`,
          body: "Current status : Extremely busy",
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 1,
          mediaUrl: murl,
          renderLargerThumbnail: true,
          showAdAttribution: false
          }}
      };

    let phoneNumber = '';
    if (m.mentionedJid && m.mentionedJid[0]) {
        phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (phoneNumber === num) {
          return this.sendMessage(m.chat, doc, { quoted: m });
        }
      } else {
        return
      }
}
export default handler

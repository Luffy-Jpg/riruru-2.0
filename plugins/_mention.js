//Guru ke bhai Arju ka Maal Hai 
//Made For T Program Bot



let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://raw.githubusercontent.com/thearju/A17/master/Assets/audio/tag.mp3"
    let url = "https://bot-support.vercel.app"
    let murl = "https://bot-support.vercel.app"
    let hash = global.botname
    let img = "https://i.postimg.cc/8PDCmWt4/Screenshot-2024-03-06-10-02-39-296-com-miui-gallery.png"
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

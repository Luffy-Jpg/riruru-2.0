//JEFF KA BOT HAI  
//RDJ-Ai made by JEFF



let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://raw.githubusercontent.com/thearju/A17/master/Assets/audio/ad.mp3"
    let url = "https://www.instagram.com/vfxartist_jeff?igsh=MXF0eWRoYXMzbDdsOQ=="
    let murl = "https://www.instagram.com/vfxartist_jeff?igsh=MXF0eWRoYXMzbDdsOQ=="
    let hash = global.botname
    let img = "https://64.media.tumblr.com/fd865f3f10f9e72f7d688bd454f2654b/d4801b790ef05840-2e/s640x960/9c70443aa2fd58631d84bf503a9bb37d221b2419.jpg"
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
          body: "RDJ-Ai",
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

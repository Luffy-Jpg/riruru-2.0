

let handler = async (m, { conn, args, usedPrefix, command }) => {
let img = 'https://i.postimg.cc/N0gPt8Kz/IMG-20240120-WA0198.jpg'

  let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length 
    let muptime = clockString(_muptime)
    let str =  `${muptime}\n\n*VERSION*\nRIRURU-V1.89\n\n*Name*\n${conn.user.name}\n\n*BOT CREATED TIME*\n29 DECEMBER 2022 \n\n*ADMINISTRATOR*\nARJU\n\n${totalf}`
    conn.sendMessage(m.chat, {
      text: str,
      contextInfo: {
      mentionedJid: [m.sender],
      isForwarded: false,
      forwardingScore: 0,
      externalAdReply: {
      title: "FOLLOW ME ON INSTAGRAM",
      body: "ARJU-SONWANI", 
      thumbnailUrl: img,
      sourceUrl: 'https://www.instagram.com/arju_sonwani.dev?igsh=a2UxZ3ZyZjNicmUw',
      mediaType: 1,
      ShowAdAttribution: true, 
      renderLargerThumbnail: true
      }}})
}
handler.help = ['runtime']
handler.tags = ['SYSTEM']
handler.command = ['runtime', 'uptime']
handler.group = true 
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, '\n*days*\n\n\n ', h, '\n*hours*\n\n\n ', m, '\n*minutes*\n\n\n ', s, '\n*Second*\n\n\n '].map(v => v.toString().padStart(2, 0)).join('')
}

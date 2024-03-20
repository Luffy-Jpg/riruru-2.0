let handler = async (m, { conn, args, usedPrefix, command }) => {
let pp = 'https://i.postimg.cc/50NqVZxR/Screenshot-2024-03-05-23-13-18-141-com-opera-browser-afin.png'

  let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let str = `Payable amount 10.0\nAfter payment send the screenshot of the payment to the owner of the bot. To contact the owner use *!owner* command.\n\nTotal payment: Rp. 10.0`
    conn.sendMessage(m.chat, {
      text: str,
      contextInfo: {
      mentionedJid: [m.sender],
      isForwarded: false,
      forwardingScore: 0,
      externalAdReply: {
      title: "Payment amount : ₹10",
      body: "Click here to make payment!",
      thumbnailUrl: pp,
      sourceUrl: 'https://bot-support.vercel.app',
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.help = ['pay']
handler.tags = ['gmx']
handler.command = ['payment', 'upi', 'pay']
handler.register = false
handler.group = true 
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
}

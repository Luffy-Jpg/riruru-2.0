let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let name = conn.getName(m.sender)
  let taguser = '@' + m.sender.split('@s.whatsapp.net')[0]
  let av = ``

  m.reply(`Hello ${taguser} Need help?  type /help`)
  conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}

handler.customPrefix = /^(bot|riruru|riraru)$/i
handler.command = new RegExp()
handler.group = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

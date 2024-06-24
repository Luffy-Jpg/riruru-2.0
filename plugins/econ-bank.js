let handler = async (m, { conn, usedPrefix }) => {
  let who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender
  let user = global.db.data.users[who]
  let username = conn.getName(who)
  //let { wealth } = global.db.data.users[who]
  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`

  var wealth = 'Gareeb 😭'
  if (`${user.credit}` <= 3000) {
    wealth = 'Aam gareeb 😭'
  } else if (`${user.credit}` <= 6000) {
    wealth = 'Lower middle class guy 😢'
  } else if (`${user.credit}` <= 100000) {
    wealth = 'Average💸'
  } else if (`${user.credit}` <= 1000000) {
    wealth = 'Ameer ka 14💸💰'
  } else if (`${user.credit}` <= 10000000) {
    wealth = 'Millionaire🤑'
  } else if (`${user.credit}` <= 100000000000000000) {
    wealth = 'Multi-Millionaire🤑'
  } else if (`${user.credit}` <= 10000000000000000000000000000000000000000000000000) {
    wealth = 'Elon Musk mere L*de pe 🤑'
  }

  conn.reply(
    m.chat,
    `🏦 *State Bank Of India*\n${username}\n\n*🪙 Credit* : ${user.credit}\n\n*Wealth :* ${wealth}

`,
    m,
    { mentions: [who] }
  ) //${user.chicken}
}
handler.help = ['bank']
handler.tags = ['economy']
handler.command = ['bank', 'vault']
handler.group = true

export default handler

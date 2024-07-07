//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `This user is already registered in Jarvis DataBase. Contact the Developer for any support.`
  if (!Reg.test(text)) throw `⚠️ Format incorrect\n\n ✳️ Use this command: *${usedPrefix + command} name.age*\n📌Exemple : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ The name cannot be empty'
  if (!age) throw '✳️ age cannot be empty'
  if (name.length >= 30) throw '✳️The name is too long' 
  age = parseInt(age)
  if (age > 100) throw 'Human age is not that big.'
  if (age < 5) throw 'huh? Are you kidding me?'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *REGISTERED* 」─
▢ *Account •* ${name}
▢ *Age •* ${age} years
▢ *Serial number •*
   ${sn}
└──────────────

 *${usedPrefix}profile* to see your profile.
`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['RDJ']

handler.command = ['verify', 'reg', 'register', 'registrar'] 
handler.group = true 

export default handler


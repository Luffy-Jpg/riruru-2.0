import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './bot.jpg')
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn, gold, credit, owner, bank} = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')

let str = `
◆━━━━━✥ *PROFILE* ✥━━━━━◆

 *𓆩 Name :* 

   • ${username} ${registered ? '\n   • ' + name + ' ': ''}
   • @${who.replace(/@.+/, '')}
   
 *𓆩 Number :* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

 *𓆩 Link :* wa.me/${who.split`@`[0]}${registered ? '\n𓆩 *🎈Age*: ' + age + ' years' : ''}

 *𓆩 warn :* ${warn}/${maxwarn}

 *𓆩 Age :* ${age}

 *𓆩 Level :* ${level}

 *𓆩 XP :* Total ${exp} (${user.exp - min} / ${xp}) 

 *𓆩 Role :* ${role}

 *𓆩 Gold :* ${gold}

 *𓆩 Credit :* ${credit}

 *𓆩 Bank :* ${bank} 

 *𓆩 Registered :* ${registered ? 'Yes': 'No'}

 *𓆩 Premium :* ${prem ? 'Yes' : 'No'} 
 
◆━━━━━✥ *Made with ♥️* ✥━━━━━◆
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
    m.react(done)

}
handler.help = ['profile']
handler.tags = ['group']
handler.command = ['profile', 'perfil']
handler.group = true 

export default handler

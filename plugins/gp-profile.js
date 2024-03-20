import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `*The user is not found in my database.*`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './bot.jpg')
let user = global.db.data.users[who]
let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
let { name, exp, credit, lastclaim, registered, regTime, age, level, role, wealth, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp 
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let ttms = `${user.exp}` / 20;  
// • @${who.replace(/@.+/, '')}
let str = `Username ➳ ${username}${about ? '\n\nCurrent about ➳ ' + about : ''}

Age ➳ ${age}

(-1 means age is not set yet.) 

Warnings ➳ ${warn}/${maxwarn}

Gold ➳ ${credit}

Relationship ➳ ${user.marry ? 'true' : 'not set yet'} 

Level ➳ ${level}

Xp ➳ ${user.exp - min} 

Rank ➳ ${role}

User Close Points ➳ *${ttms}*

Registered ➳ ${registered ? 'true': 'false'}

Account ➳ ${prem ? '*Premium*' : '*Free*'}
`
    conn.sendFile(m.chat, pp, 'profil.jpg', str, m, false, { mentions: [who] })
    m.react(done)

}
handler.help = ['profile']
handler.tags = ['group']
handler.command = ['profile'] 
handler.group = true 
export default handler

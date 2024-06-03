import { createHash } from 'crypto';
import { canLevelUp, xpRange } from '../lib/levelling.js';

let handler = async (m, { conn, usedPrefix, command}) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    if (!(who in global.db.data.users)) throw `*The user is not found in my database.*`;

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './bot.jpg');
    let user = global.db.data.users[who];
    let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || '';
    let { name, exp, credit, lastclaim, registered, regTime, age, level, role, wealth, warn } = global.db.data.users[who];
    let { min, xp, max } = xpRange(user.level, global.multiplier);
    let username = conn.getName(who);
    let math = max - xp;
    let prem = global.prems.includes(who.split`@`[0]);
    let sn = createHash('md5').update(who).digest('hex');
    let ttms = `${user.exp}` / 20;  

    let profileText = `👤 *Username*: ${username}
📝 *About*: ${about || 'Not set'}

🎂 *Age*: ${age} 

⚠️ *Warnings*: ${warn}/${maxwarn}

💰 *Gold*: ${credit}

🆔 *User*: *Official WhatsApp*

🏆 *Level*: ${level}

📊 *XP*: ${user.exp - min} 

🥇 *Rank*: ${role}

🌟 *Special Achievements*: ${prem ? 'Premium User' : 'None'}

🔗 *Registered*: ${registered ? 'Yes' : 'No'}

🔍 *User Close Points*: *${ttms}*

---

[Visit My Website](https://bot-support.vercel.app)`;

    conn.sendFile(m.chat, pp, 'profile.jpg', profileText, m, false, { mentions: [who] });
    m.react('✅');
};

handler.help = ['profile'];
handler.tags = ['group'];
handler.command = ['profile'];
handler.group = true;

export default handler;

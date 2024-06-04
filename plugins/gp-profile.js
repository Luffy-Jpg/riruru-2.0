import { createHash } from 'crypto';
import { canLevelUp, xpRange } from '../lib/levelling.js';

let handler = async (m, { conn, usedPrefix, command }) => {
    let who = m.quoted ? m.quoted.sender 
               : m.mentionedJid && m.mentionedJid[0] 
               ? m.mentionedJid[0] 
               : m.fromMe 
               ? conn.user.jid 
               : m.sender;

    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './bot.jpg');
    let user = global.db.data.users[who];
    let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || '';
    let { name, exp, credit, lastclaim, registered, regTime, age, level, role, wealth, warn } = user;
    let { min, xp, max } = xpRange(user.level, global.multiplier);
    let username = conn.getName(who);
    let math = max - xp;
    let prem = global.prems.includes(who.split`@`[0]);
    let sn = createHash('md5').update(who).digest('hex');

    let str = `
      ◆━━━━━✥ *PROFILE* ✥━━━━━◆
    
    𓆩 *Username :* ${username}

    𓆩 *About :* ${about || 'Not set'}

    𓆩 *Age :* ${age}

    𓆩 *Warnings :* ${warn}/${maxwarn}

    𓆩 *Gold :* ${credit}

    𓆩 *User :* *Official WhatsApp*

    𓆩 *Level :* ${level}

    𓆩 *XP :* ${user.exp - min}

    𓆩 *Rank :* ${role}

    𓆩 *Special Achievements: * ${prem ? 'Premium User' : 'None'}

    𓆩 *Registered :* ${registered ? 'Yes' : 'No'}

    𓆩 *User Close Points :* *®️*

    ◆━━━━━✥ *Made with ♥️* ✥━━━━━◆
`;

    await conn.sendFile(m.chat, pp, 'profile.jpg', str, m, false, { mentions: [who] });
    m.react('🌚');
}

handler.help = ['profile'];
handler.tags = ['GROUP'];
handler.command = ['profile'];
handler.group = true;

export default handler;
Explanation:
Imports and Variables:

The code imports necessary modules and defines the handler function.
who determines the target user based on the context (quoted message, mentioned user, sender).
Fetching User Data:

The handler checks if the user exists in the database and retrieves profile picture and user data.
It calculates experience points needed for the next level.
Message Formatting:

The message template is styled to be more professional, with clear sections and symbols.
String literals are used for better readability and formatting.
Sending the Profile:

The profile picture and the formatted message are sent to the chat.
A reaction is added to the message upon completion.
This ensures the code is both functional and outputs a clean, well-formatted message.








Message ChatGPT

ChatGPT can make mistakes. Che

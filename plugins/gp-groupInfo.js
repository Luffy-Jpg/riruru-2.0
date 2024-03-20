//import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
*Group Information*

*Group id* • ${groupMetadata.id}

*Group name* • ${groupMetadata.subject}

*Group members* • ${participants.length}

*Group owner* • @${owner.split('@')[0]}
 
*Group admins* •\n${listAdmin}

*Group configuration*

*Ban*            • ${isBanned ? 'true' : 'false'}
*Welcome*   • ${welcome ? 'true' : 'false'}
*Detectors*  • ${detect ? 'true' : 'false'}
*Anti del*      • ${del ? 'true' : 'false'}
*Antilink*      • ${antiLink ? 'true' : 'false'}

*Message settings*

*• Welcome* ${sWelcome}
*• Farewell* ${sBye}
*• Promoted* ${sPromote}
*• Degraded* ${sDemote}

*portfolio website*

*https://bot-support.vercel.app*

*group description* 

• ${groupMetadata.desc?.toString() || 'unknown'}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['infogrupo', 'groupinfo', 'infogp'] 
handler.group = true

export default handler

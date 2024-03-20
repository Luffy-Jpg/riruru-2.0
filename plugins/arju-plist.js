
let handler = async (m, { conn, args, usedPrefix, command }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid) 
let teks = `✅ *APPROVED USERS*\n─────────────\n` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`
m.reply(teks, null, {mentions: conn.parseMention(teks)})

}
handler.help = ['alist']
handler.tags = ['gmx']
handler.command = ['listprem', 'legend', 'listpremium'] 
handler.owner = true
handler.group = true 
export default handler


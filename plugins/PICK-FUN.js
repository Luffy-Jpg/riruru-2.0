let handler = async (m, {
    text,
    args,
    groupMetadata,
    command
}) => {

    let orang = groupMetadata.participants.map(u => u.id);
    let acakin = orang.sort(() => Math.random() - 0.5).slice(0, args[0]);
    let listnya = acakin.map((v, i) => `${i+1}. @${v.replace(/@s.whatsapp.net/g,'')}`).join('\n');
    let hasil = `${text.replace(args, '').trimStart()}\n\n${listnya}`;
    await conn.reply(m.chat, hasil, m, {
        mentions: conn.parseMention(hasil)
    });
}
handler.help = ['pick <amount> <text>']
handler.tags = ['FUN']
handler.command = /^pick/i
handler.group = true
export default handler

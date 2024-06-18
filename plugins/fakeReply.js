// ARJU KA MAAL HAI
// █▓▒▒░░░ARJU░░░▒▒▓█

import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
  let who =
    m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
  let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'bot.jpg')

  //reply link wa
  global.rpl = {
    contextInfo: {
      externalAdReply: {
        mediaUrl: dygp,
        mediaType: 1,
        description: 'ꜱᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ',
        title: packname,
        body: 'Join now',
        thumbnailUrl: pp,
        sourceUrl: dygp,
        renderLargerThumbnail: true,
      },
    },
  }

  //reply link PayPal
  global.rpyp = {
    contextInfo: {
      externalAdReply: {
        mediaUrl: dygp,
        mediaType: 1,
        description: 'Donate',
        title: 'RÌRÚRÚ-ßÖ†',
        body: 'Keep bot alive',
        thumbnailUrl: pp,
        sourceUrl: fgyt,
        renderLargerThumbnail: true,
      },
    },
  }

  //reply link yt
  global.rpyt = {
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        mediaUrl: fgyt,
        mediaType: 1,
        description: 'Suscribete : ' + fgyt,
        title: 'RÌRÚRÚ-ßÖ†',
        body: 'ムののり りﾑﾘ ﾑん乇ﾑり',
        thumbnailUrl: pp,
        sourceUrl: fgyt,
        renderLargerThumbnail: true,
      },
    },
  }

  global.fcon = {
    key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' },
    message: {
      contactMessage: {
        displayName: `RIRURU`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'RIRURU'\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
}
export default handler

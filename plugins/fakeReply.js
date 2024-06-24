// ARJU KA MAAL HAI
// █▓▒▒░░░ARJU░░░▒▒▓█

import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
  let who =
    m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
  let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'bot.jpg')
  let img = 'https://lh3.googleusercontent.com/_YElRNQBcrZpdqcql3L6X4B5fyl1ZvdyRHDeE9SF4DUb8a8yDYEflLB_v476PD9drCo8fp2Eo9IycCrncrc5whHoFnxe927_Bg=nu-e365-rj-q80-w360-h189-pp'

  //reply link wa
  global.rpl = {
    contextInfo: {
      externalAdReply: {
        mediaUrl: dygp,
        mediaType: 1,
        description: 'ꜱᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ',
        title: packname,
        body: 'Join now',
        thumbnailUrl: img,
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
        thumbnailUrl: img,
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
        thumbnailUrl: img,
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

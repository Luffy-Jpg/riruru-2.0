// JEFF KA MAAL HAI
// RDJ-Ai

import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
  let who =
    m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
  let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'bot.jpg')
  let img = 'https://i.ytimg.com/vi_webp/fSMiH4NOga0/maxresdefault.webp'

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
        title: 'RDJ-Ai',
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
        title: 'RDJ-Ai',
        body: 'Made by JEFF with love ❤️',
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
        displayName: `RDJ-Ai`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'RDJ-Ai'\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
}
export default handler

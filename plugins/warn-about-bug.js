let handler = async (m) =>
  m.reply(
    `
    \n\n*Warning ⚠️*\n\nThis BUG can crash your device or WhatsApp chat. Use this Tool at your own risk. And you won't be able to recover chats, if u have laptop or desktop than you can recover. Mobile users please dont use this command.\nOwner Required. 
    \n\n*Get started By typing*\n\n*.bug-start*
`.trim(),
  );
handler.help = ["bug"];
handler.tags = ["SYSTEM"];
handler.command = ["bug"];
handler.group = true;

export default handler;
 

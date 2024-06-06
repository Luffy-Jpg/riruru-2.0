let handler = async (m) =>
  m.reply(
    `
    \n\n*Warning ⚠️*\n\nThis BUG can crash your device or WhatsApp chat. Use this Tool at your own risk.\nAdmin & Owner Required. 
    \n\n*Get started By typing \n*.bug-start*
`.trim(),
  );
handler.help = ["bug"];
handler.tags = ["SYSTEM"];
handler.command = ["bug"];
handler.group = true;

export default handler;
 

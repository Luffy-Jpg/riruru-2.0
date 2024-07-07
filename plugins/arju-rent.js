let handler = async (m) =>
  m.reply(
    `
    \n\nAdd bot is available

Hello bro! 
For adding this bot to your group, Send a group link to the bot admin.

*Admin : JEFF*\n*Contact : wa.me/917090462940*

`.trim(),
  );
handler.help = ["add"];
handler.tags = ["RDJ"];
handler.command = ["add"];
handler.group = true;

export default handler;

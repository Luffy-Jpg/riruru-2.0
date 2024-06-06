let handler = async (m) =>
  m.reply(
    `
    \n\nAdd bot is available

Hello bro! 
For adding this bot to your group, Send a group link to the bot admin.

*Admin : ARJU*\n*Contact : wa.me/919131652091*

`.trim(),
  );
handler.help = ["add"];
handler.tags = ["DAS"];
handler.command = ["add"];
handler.group = true;

export default handler;

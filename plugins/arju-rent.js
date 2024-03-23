let handler = async (m) =>
  m.reply(
    `
    \n\nRent bot is available

Hello bro! 
For adding this bot to your group, Send a group link to the bot admin.

*Admin : ARJU*\n*Contact : wa.me/919131652091*

`.trim(),
  );
handler.help = ["rent"];
handler.tags = ["DAS"];
handler.command = ["rent"];
handler.group = true;

export default handler;

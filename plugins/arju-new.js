let handler = async (m) =>
  m.reply(
    `
This feature is not available yet! 
we will notify you when this feature is available.

*Developer : ARJU*\n*Contact : wa.me/919131652091*

`.trim(),
  );
handler.help = ["set"];
handler.tags = ["DAS"];
handler.command = ["relation", "set"];
handler.group = true;

export default handler;

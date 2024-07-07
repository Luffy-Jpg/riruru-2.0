let handler = async (m) =>
  m.reply(
    `
This feature is not available yet! 
we will notify you when this feature is available.

*Developer : JEFF*\n*Contact : wa.me/917090462940*

`.trim(),
  );
handler.help = ["set"];
handler.tags = ["RDJ"];
handler.command = ["relation", "set"];
handler.group = true;

export default handler;

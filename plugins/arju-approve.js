let handler = async (m) =>
  m.reply(
    `
Welcome!

This bot is designed to provide a seamless and secure experience. To ensure the highest level of security and privacy, users are required to obtain approval from the bot administrator before using it in their direct messages (DMs). Once approved, users can confidently utilize the bot in their DMs without any concerns about security or privacy breaches. Thank you for your cooperation and trust in our platform.

*administrator : JEFF*
*Contact : wa.me/917090462940*
`.trim(),
  );
handler.help = ["dm"];
handler.tags = ["JEFF"];
handler.command = ["dm", "get"];
handler.group = true;

export default handler; 

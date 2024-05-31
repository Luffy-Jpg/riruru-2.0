let handler = async (m) =>
  m.reply(
    `
    \n\nWelcome to Riruru Chat interface

Basic knowledge about this bot to how to use it.\n(1) *.help* or *.menu* To use the commands.\n(2) *Riruru-Chatbot* is only for *LEGENDS.*\n(3) If you want to add this bot in your WhatsApp group, please send an invite link to the Bot *ADMIN.*\n(4) This bot is in development.\n(5) Note: Don't misuse!


\n> *Admin : ARJU*\n> *Contact : wa.me/919131652091*\n> *Website: https://bot-support.vercel.app*

`.trim(),
  );
handler.help = ["start"];
handler.tags = ["BOT-SUPPORT"];
handler.command = ["start"];

export default handler; 

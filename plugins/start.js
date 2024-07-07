let handler = async (m) =>
  m.reply(
    `
    \n\nWelcome to RDJ-Ai Chat interface

Basic knowledge about this bot to how to use it.\n(1) *.help* or *.menu* To use the commands.\n\n(2) *RDJ-Ai-Chatbot* is only for *LEGENDS.*\n\n(3) If you want to add this bot in your WhatsApp group, please send an invite link to the Bot *ADMIN.*\n\n(4) This bot is in development.\n\n(5) Join Our BOT-HUB to use the bots \n\n> URL: *https://chat.whatsapp.com/KlSW8y9vDAh5ism0aN4i7a*\n\n(6) For more information you can chat with my Admin.


\n> *Admin : JEFF*\n> *Contact : wa.me/917090462940*\n> *Website: https://www.instagram.com/vfxartist_jeff?igsh=MXF0eWRoYXMzbDdsOQ==*

`.trim(),
  );
//let user = global.db.data.users[who];
//let username = conn.getName(who);
handler.help = ["start"];
handler.tags = ["BOT-SUPPORT"];
handler.command = ["start"];

export default handler; 

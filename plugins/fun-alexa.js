import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const name = conn.getName(m.sender);
  if (!text) {
    throw `Hi *${name}*, do you want to talk? Respond with *${usedPrefix + command}* (your message)\n\n📌 Example: *${usedPrefix + command}* Hi bot`;
  }
  
  m.react('🤖');

  const msg = encodeURIComponent(text);
  
  const res = await fetch(`http://api.brainshop.ai/get?bid=181061&key=6xgN0zYtTefMOSKo&msg=${msg}`);


  
  const json = await res.json();
  
  
    let reply = json.result.response;
    m.reply(reply);

};

handler.help = ['jarvis'];
handler.tags = ['DAS'];
handler.command = ['bot', 'jarvis'];

export default handler;


import fetch from 'node-fetch';

// Function to handle feedback/report command
let handler = async (
  message,
  { conn, args, usedPrefix, command, text }
) => {
  if (!text && !(message.quoted && message.quoted.text)) {
    throw 'No feedback provided';
  }
  if (!text && message.quoted && message.quoted.text) {
    text = message.quoted.text;
  }
  message.reply('Sending feedback...');
  const encodedText = encodeURIComponent(text);
  let response = await searchBing(encodedText);
  if (!response) {
    throw new Error('No response from program');
  }
  await conn.reply(message.id, response.result, message);
}

// Command aliases
handler.command = ['feedback', 'report'];
handler.group = true;
handler.tags = ['BOT-SUPPORT'];
handler.help = ['report']

export default handler;

// Function to search Bing for feedback
async function searchBing(query) {
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36';
  const headers = {
    'User-Agent': userAgent,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  };
  const response = await fetch('bing-url' + query, {
    method: 'GET',
    headers: headers,
  });
  const data = await response.json();
  return data;
}

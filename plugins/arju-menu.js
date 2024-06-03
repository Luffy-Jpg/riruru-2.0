import { promises } from "fs";
import { join } from "path";
import { xpRange } from "../lib/levelling.js";
import moment from "moment-timezone";
import os from "os";

const handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
    await conn.sendMessage(m.chat, {
        buttons: [
            { buttonId: 'info', buttonText: { displayText: 'ℹ️ Info' } },
            { buttonId: 'features', buttonText: { displayText: '🛠️ Features' } },
            { buttonId: 'commands', buttonText: { displayText: '⚙️ Commands' } }
        ],
        contentText: `*${ucapan()}*\n\nWelcome to *${botname}*! How can I assist you today?`,
        footerText: `Powered by ${botname}`,
        headerType: 1
    });

    conn.on('groupButton', async (m, { buttonId, sender }) => {
        try {
            switch (buttonId) {
                case 'info':
                    await sendInfoMenu(m, conn, _p, __dirname);
                    break;
                case 'features':
                    await sendFeaturesMenu(m, conn, _p, __dirname);
                    break;
                case 'commands':
                    await sendCommandsMenu(m, conn, _p, __dirname);
                    break;
                default:
                    await conn.sendMessage(m.chat, 'Invalid button!');
                    break;
            }
        } catch (e) {
            console.error(e);
        }
    });
};

async function sendInfoMenu(m, conn, _p, __dirname) {
    // Info menu content and logic
}

async function sendFeaturesMenu(m, conn, _p, __dirname) {
    // Features menu content and logic
}

async function sendCommandsMenu(m, conn, _p, __dirname) {
    // Commands menu content and logic
}

handler.command = /^(menu|help|\?)$/i;
handler.group = true;

export default handler;

function ucapan() {
    const time = moment.tz("Asia/Kolkata").format("HH");
    let res = "Good morning ☀️";
    if (time >= 4) {
        res = "Good Morning 🌄";
    }
    if (time >= 10) {
        res = "Good Afternoon ☀️";
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇";
    }
    if (time >= 18) {
        res = "Good Night 🌙";
    }
    return res;
}

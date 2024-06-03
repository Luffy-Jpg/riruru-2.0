import { promises } from "fs";
import { join } from "path";
import { xpRange } from "../lib/levelling.js";
import moment from "moment-timezone";
import os from "os";

const defaultMenu = `
 ╔══✪〘 %category 〙✪══╗
 %cmd %isPremium %islimit
 ╚═════✪═════╝
`.trimStart();

const handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
  await conn.sendMessage(m.chat, {
    react: {
      text: "♥️",
      key: m.key,
    },
  });

  let tags = {};

  try {
    /* Info Menu */
    const glb = global.db.data.users;
    const usrs = glb[m.sender];
    const tag = `@${m.sender.split("@")[0]}`;
    const mode = global.opts["self"] ? "Private" : "Public";
    const _package = JSON.parse(
      await promises.readFile(join(__dirname, "../package.json")).catch(_ => ({}))
    );
    const {
      age,
      exp,
      limit,
      level,
      role,
      registered,
      credit
    } = glb[m.sender];
    const { min, xp, max } = xpRange(level, global.multiplier);
    const name = await conn.getName(m.sender);
    const premium = glb[m.sender].premiumTime;
    const prems = `${premium > 0 ? "Premium" : "Free"}`;
    const platform = os.platform();

    let ucpn = `${ucapan()}`;

    const _uptime = process.uptime() * 1000;
    let _muptime;
    if (process.send) {
      process.send("uptime");
      _muptime = await new Promise(resolve => {
        process.once("message", resolve);
        setTimeout(resolve, 1000);
      }) * 1000;
    }
    const muptime = clockString(_muptime);
    const uptime = clockString(_uptime);

    const totalfeatures = Object.values(global.plugins).filter(v => v.help && v.tags).length;
    const totalreg = Object.keys(glb).length;
    const help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: "customPrefix" in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      };
    });
    for (const plugin of help) {
      if (plugin && "tags" in plugin) {
        for (const tag of plugin.tags) {
          if (!(tag in tags) && tag) tags[tag] = tag;
        }
      }
    }
    conn.menu = conn.menu ? conn.menu : {};
    const header = conn.menu.header || defaultMenu.header;
    const body = conn.menu.body || defaultMenu.body;
    const footer = conn.menu.footer || defaultMenu.footer;
    const after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? "" : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`);
    let text = `
◆━━━━━✥𝗠𝗘𝗡𝗨✥━━━━━◆

𓆩 *Name:* ${name}
𓆩 *Mode:* ${mode}
𓆩 *Platform:* ${platform}
𓆩 *Type:* Node.Js
𓆩 *Baileys:* Multi Device
𓆩 *Prefix:* [ ${_p} ]
𓆩 *Runtime:* ${muptime}
𓆩 *Total Users:* 01 to ${totalreg}

◆━━━━━✥𝗙𝗘𝗔𝗧𝗨𝗥𝗘𝗦✥━━━━━◆
𓆩 *cmd(s):* ${totalfeatures}

◆━━━━━✥𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦✥━━━━━◆

${Object.keys(tags)
  .map(tag => {
    return header.replace(/%category/g, tags[tag]) + "\n" + help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
      return menu.help.map(help => {
        return body.replace(/%cmd/g, menu.prefix ? help : `${_p}${help}`)
          .replace(/%islimit/g, menu.limit ? "◔" : "")
          .replace(/%isPremium/g, menu.premium ? "℗" : "")
          .trim();
      }).join("\n");
    }).join("\n") + footer;
  }).join("\n")}

${after}
`.trim();
    
    const replace = {
      "%": "%",
      p: _p,
      uptime,
      muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : "[unknown github url]",
      tag,
      ucpn,
      platform,
      mode,
      _p,
      credit,
      age,
      tag,
      name,
      prems,
      level,
      limit,
      totalreg,
      totalfeatures,
      role,
    };
    
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name]);

    conn.sendFile(m.chat, 'bot.jpg', '', text.trim(), m);
    
  } catch (e) {
    await conn.reply(m.chat, " error", m);
    throw e;
  }
};

handler.command = /^(menu|help|\?)$/i;
handler.group = true;

export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function clockString(ms) {
  const h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [h, " H ", m, " M ", s, " S "].map(v => v.toString().padStart(2, 0)).join("");
}

function clockStringP(ms) {
  const ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10;
  const mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12;
  const d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30;
  const h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [ye, " *Years 🗓️*\n", mo, " *Month 🌙*\n", d, " *Days ☀️*\n", h, " *Hours 🕐*\n", m, " *Minute ⏰*\n", s, " *Second ⏱️*"].map(v => v.toString().padStart(2, 0)).join("");
}

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

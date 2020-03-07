const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://wandering-autumn-painter.glitch.me`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//كود للتجربة

console.log("3bker");
client.on("message", message => {
  if (message.content.startsWith(prefix + "bc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(" ");
    message.guild.members
      .filter(m => m.presence.status !== "offline")
      .forEach(m => {
        m.send(`${argresult}\n ${m}`);
      });
    message.channel.send(
      `\`${
        message.guild.members.filter(m => m.presence.status !== "online").size
      }\` : عدد الاعضاء المستلمين`
    );
    message.delete();
  }
});

client.on("ready", () => {
  console.log("By : FROSTY");
});

//plaing 
const developers = ["355874266723516426"];
const adminprefix = "#";
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!developers.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + "pl")) {
    client.user.setGame(argresult);
    message.channel.send(
      "**:white_check_mark: | The Playing Status Has Been Changed To : ``" +
        `${argresult}` +
        "``**"
    );
  } else if (message.content.startsWith(adminprefix + "wt")) {
    client.user.setActivity(argresult, { type: "WATCHING" });
    message.channel.send(
      "**:white_check_mark: | The Watching Status Has Been Changed To : ``" +
        `${argresult}` +
        "``**"
    );
  } else if (message.content.startsWith(adminprefix + "ls")) {
    client.user.setActivity(argresult, { type: "LISTENING" });
    message.channel.send(
      "**:white_check_mark: | The Listening Status Has Been Changed To : ``" +
        `${argresult}` +
        "``**"
    );
  } else if (message.content.startsWith(adminprefix + "st")) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
    message.channel.send(
      "**:white_check_mark: | The Streaming Status Has Been Changed To : ``" +
        `${argresult}` +
        "``**"
    );
  }
  if (message.content.startsWith(adminprefix + "setname")) {
    client.user.setUsername(argresult).then;
    message.channel.send(`Changing The Name To ..**${argresult}** `);
  } else if (message.content.startsWith(adminprefix + "setavatar")) {
    client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
  }
});
client.on("message",message => {
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar")){
const mention = message.mentions.users.first()

if(!mention) return console.log("") 
let embed = new Discord.RichEmbed()
.setColor("BLACK")
.setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
.setTitle("Avatar Link")
.setURL(`${mention.avatarURL}`)
.setImage(`${mention.avatarURL}`)
.setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
    message.channel.send(embed)
}
})
//avatar
client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar server")) {
    let doma = new Discord.RichEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1]
var avt = args || message.author.id;    
    client.fetchUser(avt).then(user => {
     avt = user;
  let embed = new Discord.RichEmbed() 
  .setColor("BLACK")
  .setAuthor(`${avt.tag}`, avt.avatarURL)
  .setTitle("Avatar Link")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
    })
  }
})
const top = JSON.parse(fs.readFileSync("top.json", "UTF8"));

function save() {
  fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
  if (newMember.user.bot) return;
  if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
  if (!top[newMember.guild.id][newMember.user.id])
    top[newMember.guild.id][newMember.user.id] = {
      text: 0,
      voice: parseInt(Math.random() * 10),
      msgs: 0,
      id: newMember.user.id
    };
  save();
  if (!oldMember.voiceChannel && newMember.voiceChannel) {
    var addXP = setInterval(async function() {
      top[newMember.guild.id][newMember.user.id].voice += parseInt(
        Math.random() * 4
      );
      save();
      if (!newMember.voiceChannel) {
        clearInterval(addXP);
      }
    }, 60000);
  }
});

//top voice & text
client.on("message", async function(message) {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!top[message.guild.id]) top[message.guild.id] = {};
  if (!top[message.guild.id][message.author.id])
    top[message.guild.id][message.author.id] = {
      text: parseInt(Math.random() * 10),
      voice: 1,
      msgs: 0,
      id: message.author.id
    };
  if (top[message.guild.id][message.author.id].msgs > 10) {
    top[message.guild.id][message.author.id].text += parseInt(
      Math.random() * 4
    );
    top[message.guild.id][message.author.id].msgs = 0;
  }
  save();
  var args = message.content.split(" ");
  var cmd = args[0].toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "top text")) {
    var topArray = Object.values(top[message.guild.id]);
    var num = 0;
    var textStr = `${topArray
      .sort((a, b) => b.text - a.text)
      .slice(0, 10)
      .filter(user => user.text > 0 && message.guild.members.get(user.id))
      .map(function(user) {
        if (user.text > 0) {
          return `#${++num} | <@${user.id}> XP: ${user.text} `;
        }
      })
      .join("")}`;
    var embed = new Discord.RichEmbed()
      .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
      .setColor("13B813")
      .addField(
        `:speech_balloon: | TEXT LEADERBOARD`,
        `${textStr} ✨ | For More: ${prefix}top text`,
        true
      )
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp();
    message.channel.send({
      embed: embed
    });
  } else {
    if (message.content.startsWith(prefix + "top voice")) {
      var topArray = Object.values(top[message.guild.id]);
      var num = 0;
      var voiceStr = `${topArray
        .sort((a, b) => b.voice - a.voice)
        .slice(0, 10)
        .filter(user => user.voice > 0 && message.guild.members.get(user.id))
        .map(function(user) {
          if (user.voice > 0) {
            return `#${++num} | <@${user.id}> XP: ${user.voice}`;
          }
        })
        .join("")}`;
      var embed = new Discord.RichEmbed()
        .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
        .setColor("13B813")
        .addField(
          `**:microphone2: | VOICE LEADERBOARD**`,
          `${voiceStr} **:sparkles: More?** ${prefix}top voice`,
          true
        )

        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp();
      message.channel.send({
        embed: embed
      });
    } else {
      if (message.content.startsWith(prefix + "top")) {
        var topArray = Object.values(top[message.guild.id]);
        var num = 0;
        var textStr = `${topArray
          .sort((a, b) => b.text - a.text)
          .slice(0, 5)
          .filter(user => user.text > 0 && message.guild.members.get(user.id))
          .map(function(user) {
            if (user.text > 0) {
              return `#${++num} | <@${user.id}> XP: ${user.text}`;
            }
          })
          .join("")}`;
        num = 0;
        var voiceStr = `${topArray
          .sort((a, b) => b.voice - a.voice)
          .slice(0, 5)
          .filter(user => user.voice > 0 && message.guild.members.get(user.id))
          .map(function(user) {
            if (user.voice > 0) {
              return `#${++num} | <@${user.id}> XP: ${user.voice}`;
            }
          })
          .join("")}`;
        var embed = new Discord.RichEmbed()
          .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
          .addField(
            "**TOP 5 TEXT :speech_balloon:**",
            `${textStr}**:sparkles: More?** ${prefix}top text`,
            true
          )
          .addField(
            "**TOP 5 VOICE :microphone2:**",
            `${voiceStr}**:sparkles: More?** ${prefix}top voice`,
            true
          )
          .setFooter(message.author.tag, message.author.displayAvatarURL)
          .setTimestamp()
          .setColor("#00000");
        message.channel.send({
          embed: embed
        });
      }
    }
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "توب")) {
    message.guild.fetchInvites().then(i => {
      var invites = [];

      i.forEach(inv => {
        var [invs, i] = [{}, null];

        if (inv.maxUses) {
          invs[inv.code] = +inv.uses + "/" + inv.maxUses;
        } else {
          invs[inv.code] = +inv.uses;
        }
        invites.push(
          `invite: ${inv.url} inviter: ${inv.inviter} `[inv.code]`;`
        );
      });
      var embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setDescription(`${invites.join(``) + "nn**By:** " + message.author}`);
      message.channel.send({ embed: embed });
    });
  }
});

//help


client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { //DiamondCodes - [ X_KillerYT ]
    let pages = [`
***__وصف عن البوت__***
**
:gem:  البوت فيه كثير ميزات حلوة و جميلة
 ا:rocket: البوت يعمل قرابة 24 ساعة
**
        ***__General orders__***
**
『!server /يعرض لك معلومات السيرفر 』

『/ يعرض لك معلومات عنك』
『?myroles / لرؤية جميع رتبك الشخصية بالسيرفر』
『?id / يعرض لك معلومات عنك』
『?link / لمعمل انفايت ( دعوة ) لشخص』
『?inv / لدعوة البوت الى سيرفرك』
『?support / سيرفر المساعدة』
『?cmind / لكتابة اي شيء تقوله داخل صورة』
『?servavatar / لرؤية صورة السيرفر』
『?count / لرؤية عدد الاعضاء بالسيرفر』
『?avatar / لرؤية صورة شخص 』
『?bot-info / لرؤية معلومات عن البوت 』
『?report / لرفع شكوى على عضو 』
『?servers / لرؤية عدد السيرفرات التي داخل بها البوت 』
『?myid / لمعرفة الايدي الخاص بك 』
**
  `
,`
        ***__Admin orders__***
**
『?clear / لحذف الشات 』
『?mc / لقفل الشات  』
『?unmc / لفتح الشات 』
『?bc / لارسال رسالة لجميع اعضاء السيرفر 』
『?kick / لطرد شخص من الدسكورد 』
『?ban / لاعطاء شخص باند من الدسكورد 』
『?mute / لاعطاء شخص ميوت 』
『?unmute / لفك ميوت شخص 』
『?ct / لانشاء روم كتابي 』
『?cv / لانشاء روم صوتي 』
『?rolebc / برود كاست للرتب 』
**
  `
,`
        ***__Games orders__***
**
『?لعبة صراحة / صراحة 』
『?لعبة كت تويت / كت تويت 』
『?لعبة لو خيروك / لو خيروك』
『?rps / لعبة حجرة ورقة مقص 』
『?اسئلة للعبة فورت نايت /  فورت نايت 』
**
   
`]
    let page = 1;
 
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
 
    message.author.sendEmbed(embed).then(msg => {
 
        msg.react('◀').then( r => {
            msg.react('▶')
 
 
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
 
 
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
 
 
 
        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
     
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});






























var ChannelName = "شات"; //اسم الروم
var imageURL = "http://i8.ae/sw4p9"; //رابط الصورة

var wlc_msg_width = 170, //اعرض كلمة ولكم
  wlc_msg_height = 80; //ارتفاع كلمة ولكم

var user_msg_width = 200, //عرض اسم الشخص
  user_msg_height = 120; //ارتفاع اسم الشخص

var user_avatar_width = 180, //عرض افتار الشخص
  user_avatar_height = 150; //ارتفاع افتار الشخص
var _0x1201 = [
  "0x51",
  "0x25",
  "0x28",
  "0x36",
  "0x26",
  "name",
  "0x30",
  "welcome-steve.png",
  "displayAvatarURL",
  "push",
  "0xd",
  "fillStyle",
  "0x12",
  "0x3e",
  "0x27",
  "0x4a",
  "0x1e",
  "0x4d",
  "0x40",
  "0x2e",
  "0x5",
  "0x21",
  "0x20",
  "0x33",
  "0x44",
  "beginPath",
  "createCanvas",
  "0x42",
  "0x24",
  "0x31",
  "0x4e",
  "0x10",
  "loadImage",
  "0x2a",
  "#000000",
  "0x6",
  "0x9",
  "fillText",
  "shift",
  "height",
  "font",
  "0x35",
  "send",
  "0x38",
  "0x48",
  "drawImage",
  "0x4b",
  "0x3a",
  "0xa",
  "find",
  "0x17",
  "Attachment",
  "0x2d",
  "0x2c",
  "0x16",
  "width",
  "0x52",
  "0xc",
  "0x3d",
  "arc",
  "0x2",
  "0xe",
  "0x4f",
  "0x3f",
  "0x53",
  "0x45",
  "toLowerCase",
  "0x43",
  "0x3b",
  "0x13",
  "0x1a",
  "0x19",
  "guildMemberAdd",
  "0x1b",
  "0x22",
  "",
  "0xf",
  "0x18",
  "0x50",
  "0x7",
  "0x15",
  "0xb",
  "0x32",
  "0x2f",
  "0x4c",
  "getContext",
  "0x1f",
  "0x39",
  "closePath",
  "0x29",
  "0x37",
  "0x23",
  "0x1c",
  "0x8",
  "0x1",
  "0x14",
  "0x34",
  "0x4",
  "0x3c",
  "0x2b",
  "0x3",
  "0x47",
  "0x1d"
];
(function(_0x5246af, _0x5166c7) {
  var _0x456de7 = function(_0x9fd73a) {
    while (--_0x9fd73a) {
      _0x5246af["push"](_0x5246af["shift"]());
    }
  };
  _0x456de7(++_0x5166c7);
})(_0x1201, 0xee);
var _0x35c0 = function(_0x5246af, _0x5166c7) {
  _0x5246af = _0x5246af - 0x0;
  var _0x456de7 = _0x1201[_0x5246af];
  return _0x456de7;
};
var _0x1399 = [
  "0x17",
  _0x35c0("0x44"),
  _0x35c0("0x14"),
  "0x35",
  _0x35c0("0x30"),
  _0x35c0("0x33"),
  _0x35c0("0x26"),
  _0x35c0("0x2a"),
  _0x35c0("0x59"),
  "0x27",
  _0x35c0("0x39"),
  "0x2",
  _0x35c0("0x31"),
  "shift",
  "0x23",
  _0x35c0("0x2"),
  _0x35c0("0x1a"),
  _0x35c0("0x49"),
  "0x38",
  "0xa",
  _0x35c0("0x1f"),
  _0x35c0("0x57"),
  "channels",
  _0x35c0("0x5d"),
  "toBuffer",
  "0x0",
  _0x35c0("0x48"),
  _0x35c0("0x3d"),
  _0x35c0("0x38"),
  _0x35c0("0xd"),
  _0x35c0("0x29"),
  _0x35c0("0x41"),
  _0x35c0("0x4d"),
  _0x35c0("0x7"),
  _0x35c0("0x5"),
  "0x1c",
  _0x35c0("0x4e"),
  _0x35c0("0x5a"),
  _0x35c0("0x24"),
  _0x35c0("0xa"),
  "0x11",
  _0x35c0("0x22"),
  _0x35c0("0x50"),
  _0x35c0("0x2d"),
  "username",
  _0x35c0("0x4"),
  _0x35c0("0x3f"),
  _0x35c0("0x53"),
  _0x35c0("0x3a"),
  _0x35c0("0x4b"),
  _0x35c0("0x19"),
  "0x21",
  _0x35c0("0x17"),
  _0x35c0("0x35"),
  "0x2b",
  _0x35c0("0x4f"),
  _0x35c0("0x40"),
  _0x35c0("0x25"),
  _0x35c0("0x4c"),
  _0x35c0("0x1b"),
  _0x35c0("0x27"),
  _0x35c0("0x15"),
  _0x35c0("0x16"),
  _0x35c0("0x5b"),
  _0x35c0("0x1d"),
  _0x35c0("0x3e"),
  _0x35c0("0x1"),
  _0x35c0("0x0"),
  _0x35c0("0x4a"),
  _0x35c0("0x8"),
  _0x35c0("0x63"),
  _0x35c0("0x2c"),
  _0x35c0("0x3"),
  _0x35c0("0x66"),
  "clip",
  "0x1d",
  _0x35c0("0x64"),
  "0x7",
  _0x35c0("0x51"),
  _0x35c0("0x28"),
  _0x35c0("0xf"),
  _0x35c0("0x54"),
  _0x35c0("0x36"),
  _0x35c0("0x32")
];
(function(_0x41c1cd, _0x14c4e5) {
  var _0x4e0706 = function(_0x4888aa) {
    while (--_0x4888aa) {
      _0x41c1cd[_0x35c0("0x50")](_0x41c1cd[_0x35c0("0x6")]());
    }
  };
  _0x4e0706(++_0x14c4e5);
})(_0x1399, 0xc5);
var _0x3760 = function(_0x233076, _0x563cc6) {
  _0x233076 = _0x233076 - 0x0;
  var _0x427e3b = _0x1399[_0x233076];
  return _0x427e3b;
};
var _0x4720 = [
  _0x35c0("0x53"),
  _0x3760(_0x35c0("0x49")),
  _0x3760(_0x35c0("0x3e")),
  _0x3760("0xa"),
  _0x3760("0x2c"),
  _0x35c0("0x5c"),
  _0x3760(_0x35c0("0x20")),
  _0x35c0("0x60"),
  _0x3760(_0x35c0("0x2a")),
  "guild",
  "0x20",
  _0x3760(_0x35c0("0x48")),
  "0xf",
  _0x3760(_0x35c0("0x33")),
  _0x35c0("0x10"),
  _0x3760(_0x35c0("0x3c")),
  "20px\x20sans-serif",
  _0x3760(_0x35c0("0x5b")),
  "0x11",
  _0x35c0("0x19"),
  "0x3",
  _0x3760("0x3e"),
  "0x2",
  _0x35c0("0x50"),
  _0x35c0("0x3f"),
  _0x3760(_0x35c0("0x19")),
  _0x3760("0x31"),
  _0x35c0("0x63"),
  _0x3760(_0x35c0("0x4d")),
  _0x3760(_0x35c0("0x44")),
  _0x3760(_0x35c0("0x24")),
  _0x35c0("0x6"),
  _0x3760(_0x35c0("0x59")),
  _0x3760(_0x35c0("0x3d")),
  _0x3760("0xe"),
  _0x3760(_0x35c0("0x27")),
  _0x3760("0x41"),
  _0x3760(_0x35c0("0x3a")),
  _0x3760(_0x35c0("0x2e")),
  _0x3760(_0x35c0("0x41")),
  _0x3760("0x3c"),
  _0x35c0("0x26"),
  _0x35c0("0x2b"),
  _0x3760(_0x35c0("0x2f")),
  _0x3760(_0x35c0("0x46")),
  _0x35c0("0x48"),
  _0x3760(_0x35c0("0x3f")),
  _0x3760(_0x35c0("0x34")),
  _0x3760(_0x35c0("0x43")),
  _0x3760(_0x35c0("0x9")),
  _0x3760(_0x35c0("0x3")),
  _0x3760(_0x35c0("0x58")),
  _0x3760(_0x35c0("0x1e")),
  _0x3760(_0x35c0("0x63")),
  _0x3760(_0x35c0("0x66")),
  _0x3760("0x43"),
  _0x3760(_0x35c0("0x18")),
  _0x3760(_0x35c0("0x5d")),
  "user",
  _0x35c0("0x41"),
  _0x35c0("0x11"),
  _0x3760(_0x35c0("0x5c")),
  _0x3760("0x1e"),
  _0x3760(_0x35c0("0x3b")),
  _0x3760("0x0")
];
(function(_0x2223f9, _0x219923) {
  var _0x31fede = function(_0x2df28e) {
    while (--_0x2df28e) {
      _0x2223f9[_0x3760(_0x35c0("0x51"))](
        _0x2223f9[_0x3760(_0x35c0("0x5f"))]()
      );
    }
  };
  _0x31fede(++_0x219923);
})(_0x4720, 0x105);
var _0x5068 = function(_0x43f4c6, _0x444185) {
  _0x43f4c6 = _0x43f4c6 - 0x0;
  var _0x3be6a8 = _0x4720[_0x43f4c6];
  return _0x3be6a8;
};
var _0x27a4 = [
  _0x5068("0x5"),
  _0x5068(_0x3760("0x50")),
  _0x5068(_0x3760(_0x35c0("0x62"))),
  _0x3760("0x18"),
  _0x3760(_0x35c0("0x2c")),
  _0x5068(_0x3760(_0x35c0("0x5c"))),
  _0x5068("0x35"),
  _0x5068(_0x35c0("0x5e")),
  _0x5068(_0x3760(_0x35c0("0x43"))),
  _0x5068(_0x3760(_0x35c0("0xe"))),
  _0x35c0("0x52"),
  _0x5068(_0x3760(_0x35c0("0x1d"))),
  _0x5068(_0x3760(_0x35c0("0x15"))),
  _0x3760(_0x35c0("0x3a")),
  _0x5068(_0x3760(_0x35c0("0x47"))),
  "0x16",
  _0x5068(_0x3760(_0x35c0("0x3c"))),
  _0x3760(_0x35c0("0x14")),
  _0x3760(_0x35c0("0x4b")),
  _0x3760(_0x35c0("0x12")),
  _0x3760(_0x35c0("0x31")),
  _0x5068(_0x3760(_0x35c0("0x36"))),
  _0x5068(_0x3760(_0x35c0("0x3f"))),
  _0x5068(_0x3760("0x37")),
  _0x5068(_0x3760(_0x35c0("0x3e"))),
  _0x5068(_0x35c0("0x2f")),
  _0x5068(_0x3760("0x2a")),
  _0x3760("0x46"),
  _0x5068(_0x3760(_0x35c0("0x34"))),
  _0x35c0("0x13"),
  _0x5068(_0x3760("0x25")),
  _0x5068(_0x3760("0x13")),
  _0x5068(_0x3760(_0x35c0("0x1f"))),
  _0x5068(_0x3760(_0x35c0("0x55"))),
  _0x3760(_0x35c0("0x43")),
  _0x5068(_0x35c0("0x54")),
  _0x3760(_0x35c0("0x26")),
  _0x3760(_0x35c0("0x32")),
  _0x5068(_0x3760("0x23")),
  _0x5068(_0x3760(_0x35c0("0x29"))),
  _0x5068(_0x3760(_0x35c0("0xb"))),
  _0x5068(_0x3760(_0x35c0("0x23"))),
  _0x5068(_0x3760(_0x35c0("0x64"))),
  _0x5068(_0x3760(_0x35c0("0x45"))),
  _0x35c0("0x61"),
  _0x5068(_0x3760(_0x35c0("0x18"))),
  _0x35c0("0x1c"),
  _0x5068(_0x3760(_0x35c0("0x4"))),
  _0x5068(_0x3760(_0x35c0("0x5e"))),
  _0x5068(_0x3760("0x12"))
];
(function(_0x3327e1, _0x13bc7c) {
  var _0x2f4e6d = function(_0x3c6792) {
    while (--_0x3c6792) {
      _0x3327e1[_0x5068(_0x3760(_0x35c0("0x5c")))](
        _0x3327e1[_0x5068(_0x3760(_0x35c0("0x34")))]()
      );
    }
  };
  _0x2f4e6d(++_0x13bc7c);
})(_0x27a4, 0xfc);
var _0x4938 = function(_0x2ca943, _0x227a65) {
  _0x2ca943 = _0x2ca943 - 0x0;
  var _0x875d05 = _0x27a4[_0x2ca943];
  return _0x875d05;
};
var _0x3b55 = [
  _0x4938(_0x3760(_0x35c0("0x15"))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x3")))),
  _0x4938(_0x5068(_0x3760("0x30"))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x63")))),
  _0x4938(_0x3760("0x45")),
  _0x4938(_0x5068(_0x3760("0x1"))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x64")))),
  _0x4938(_0x5068(_0x3760("0x15"))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x56")))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x25")))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x31")))),
  _0x4938(_0x5068(_0x3760("0x1b"))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x47")))),
  _0x4938(_0x5068(_0x3760("0x2f"))),
  _0x5068(_0x3760(_0x35c0("0x27"))),
  _0x4938(_0x35c0("0x27")),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x54")))),
  _0x4938(_0x5068(_0x3760("0x11"))),
  _0x5068(_0x35c0("0x37")),
  _0x4938(_0x5068(_0x35c0("0x30"))),
  _0x5068(_0x3760(_0x35c0("0x4a"))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x23")))),
  _0x5068(_0x35c0("0x39")),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x16"))))
];
(function(_0x271bb6, _0xf40e5) {
  var _0xf5773e = function(_0x5d5319) {
    while (--_0x5d5319) {
      _0x271bb6[_0x4938(_0x5068(_0x35c0("0x25")))](
        _0x271bb6[_0x4938(_0x5068(_0x3760(_0x35c0("0xc"))))]()
      );
    }
  };
  _0xf5773e(++_0xf40e5);
})(_0x3b55, 0x1db);
var _0x4338 = function(_0x52ee7f, _0x2e020a) {
  _0x52ee7f = _0x52ee7f - 0x0;
  var _0xe4778b = _0x3b55[_0x52ee7f];
  return _0xe4778b;
};
client["on"](_0x4338(_0x4938(_0x3760(_0x35c0("0x1c")))), async _0x115f72 => {
  var _0x3754aa = _0x115f72[_0x4338(_0x5068(_0x3760(_0x35c0("0x5a"))))][
    _0x4338(_0x4938(_0x5068(_0x3760("0x20"))))
  ][_0x4938(_0x3760(_0x35c0("0x37")))](
    _0x40f23f =>
      _0x40f23f[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x1a")))))] ===
      ChannelName[_0x4938(_0x5068(_0x3760(_0x35c0("0xf"))))]()
  );
  if (!_0x3754aa) return ![];
  var _0x5c76f9 = Canvas[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x3b")))))](
    0x190,
    0xc8
  );
  var _0x90bfad = _0x5c76f9[_0x4338(_0x4938(_0x5068(_0x35c0("0x14"))))]("2d");
  const _0x30e23f = await Canvas[_0x4338(_0x4938(_0x5068(_0x3760("0x29"))))](
    imageURL
  );
  const _0x41edf0 = await Canvas[_0x4338(_0x4938(_0x5068(_0x3760("0x29"))))](
    _0x115f72[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x55")))))][
      _0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x36")))))
    ]
  );
  _0x90bfad[_0x4338(_0x4938(_0x3760("0x48")))](
    _0x30e23f,
    0x0,
    0x0,
    _0x5c76f9[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x9")))))],
    _0x5c76f9[_0x4938(_0x5068(_0x3760(_0x35c0("0x3a"))))]
  );
  _0x90bfad[_0x4938(_0x5068(_0x3760("0x15")))] = _0x4338(
    _0x4938(_0x5068(_0x35c0("0x5d")))
  );
  _0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x1c")))))] = _0x4338(
    _0x4938(_0x35c0("0x30"))
  );
  _0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x44")))))](
    "" +
      _0x115f72[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x55")))))][
        _0x4338(_0x4938(_0x3760(_0x35c0("0x30"))))
      ],
    user_msg_width,
    user_msg_height
  );
  _0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x59")))))] = _0x4338(
    _0x4938(_0x5068(_0x3760(_0x35c0("0x65"))))
  );
  _0x90bfad[_0x4938(_0x5068(_0x3760("0x13")))] = _0x4338(
    _0x4938(_0x5068(_0x3760(_0x35c0("0x5a"))))
  );
  _0x90bfad[_0x4338(_0x4938(_0x3760("0x35")))](
    _0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x40"))))),
    wlc_msg_width,
    wlc_msg_height
  );
  _0x90bfad[_0x4938(_0x5068(_0x3760(_0x35c0("0x42"))))]();
  _0x90bfad[_0x4938(_0x5068(_0x3760(_0x35c0("0x21"))))](
    0x64,
    0x64,
    0x46,
    0x0,
    Math["PI"] * 0x2,
    !![]
  );
  _0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760("0x10"))))]();
  _0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760("0x49"))))]();
  _0x90bfad[_0x4338(_0x4938(_0x3760(_0x35c0("0xc"))))](
    _0x41edf0,
    0x19,
    0x19,
    user_avatar_width,
    user_avatar_height
  );
  _0x3754aa[_0x4338(_0x4938(_0x3760(_0x35c0("0x53"))))](
    new Discord[_0x4338(_0x4938(_0x3760(_0x35c0("0x5a"))))](
      _0x5c76f9[_0x4338(_0x4938(_0x5068(_0x35c0("0x42"))))](),
      _0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x3d")))))
    )
  );
});



   



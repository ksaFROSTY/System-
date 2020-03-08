const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://.glitch.me`);
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

console.log("FROSTY");
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
『!id / يعرض لك معلومات عنك』
『!inv / لدعوة البوت الى سيرفرك』
『color/عرض قائمة الألوان 』
『colors/اختار رقم اللون』
『cc/صنع الالوان』
『!top/عرض قائمة توب سيرفر 』
『!avatar/روئة صورتك』
『!giveaway/قيف اوى』
**
  `
,`
        ***__Admin orders__***
**
『!clear / لحذف الشات 』
『!mc / لقفل الشات  』
『!unmc / لفتح الشات 』
『!bc / لارسال رسالة لجميع اعضاء السيرفر 』
『!kick / لطرد شخص من الدسكورد 』
『!ban / لاعطاء شخص باند من الدسكورد 』
『!mute / لاعطاء شخص ميوت 』
『!role/عطاء رول 』
**
  `
,`
        ***__ViP orders__***
**
『welcome/ مثل بروبوت اسم روم ولكم』
『!togglelog/لتفعيل اللوق』
『!setLog/تحديد روم لوق』
『!profile/اسئلة للعبة فورت نايت  』
=================================
Discord: Ex |FRÒSTY ま#2819
YouTube: FROSTY/مجحفلهم 
=================================
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

//inv


client.on("message", luxy => {
  if (luxy.author.bot) return;
  if (true) {
    if (luxy.content === prefix + "inv") {
      luxy.author
        .send("** تــفــضــل رابــط الــبــوت **\nLink Bot ")
        .catch(e => console.log(e.stack));
    }
  }
});
client.on("message", luxy => {
  if (luxy.author.bot) return;
  if (luxy.content === prefix + "inv") {
    luxy.channel.send(
      " :white_check_mark:  **-** **Done! Check Your DM**"
    );
  }
});

//kick


client.on('message', message => {
  if(message.content.split(' ')[0] == `${prefix}kick`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | لا تمتلك صلاحية طرد الاعضاء!');
      if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | انا لا امتلك صلاحية طرد الاعضاء!');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send("منشن للشخص وسبب الكيك");
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send(':no_entry: | لماذا تريد طرد نفسك؟');
      if(user.user.id === message.guild.owner.id) return message.channel.send(':no_entry: | محاولة فاشلة جميلة :3');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`:no_entry: | لا يمكنك طرد **${user.user.username}** لأن رتبته اعلي منك!`);
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | لا يمكنني طرد **${user.user.username}** لأن رتبته اعلي من رتبتي!`);
      if(!message.guild.member(user.user).kickable) return message.channel.send(`:no_entry: | لا يمكنني طرد **${user.user.username}** `);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`:no_entry: | لا يمكننك طرد **${user.user.username}** لأنه يمتلك رتبة عالية!`);
      message.guild.member(user).kick(reason, user);
      message.channel.send(`Done kick from the server✅`);
    }
});

//ban


client.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (!message.channel.guild) return;

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
    if (message.mentions.users.size < 1)
      return message.reply("**Mention Someone**");
    if (!reason) return;
    if (!message.guild.member(user).bannable)
      return message.reply(
        "**This person has a grade higher than his bot rank**"
      );

    message.guild.member(user).ban(7, user);
    message.channel.send(
      `**:white_check_mark: ${user} has been banned :airplane: **`
    );
    user.send(`Done ban from the server✅`
    );
  }
});

//role

client.on("message", message => {
  var args = message.content.split(" ").slice(1);
  var msg = message.content.toLowerCase();
  if (!message.guild) return;
  if (!msg.startsWith(prefix + "role")) return;
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(" **__ليس لديك صلاحيات__**");
  if (msg.toLowerCase().startsWith(prefix + "srole")) {
    if (!args[0])
      return message.reply("**:x: يرجى وضع الشخص المراد سحب منه الرتبة**");
    if (!args[1])
      return message.reply("**:x: يرجى وضع الرتبة المراد سحبها من الشخص**");
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: يرجى وضع الرتبة المراد سحبها من الشخص**");
    if (message.mentions.members.first()) {
      message.mentions.members.first().removeRole(role1);
      message.mentions.members.first().removeRole(role1);
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] رتبة [ " +
          args[0] +
          " ] تم سحب من **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.removeRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم سحب من الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.removeRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم سحب من البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "سحب رول") {
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.removeRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم سحب من البشريين رتبة**"
      );
    }
  } else {
    if (!args[0])
      return message.reply("**:x: يرجى وضع الشخص المراد اعطائها الرتبة**");
    if (!args[1])
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطائها للشخص**");
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطائها للشخص**");
    if (message.mentions.members.first()) {
      message.mentions.members.first().addRole(role1);
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] رتبة [ " +
          args[0] +
          " ] تم اعطاء **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء البشريين رتبة**"
      );
    }
  }
});

//invite By


const invites = {};
const wait = require("util").promisify(setTimeout);
client.on("ready", () => {
  wait(1000);
  client.guilds.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites;
    });
  }); 
});
client.on("guildMemberAdd", member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const welcome = member.guild.channels.find(
      channel => channel.name === "welcome");
    welcome.send(` <@${member.id}> **invited by** <@${inviter.id}>`
    );
  });
});

//online voice 

 var voiceonline = require ("./voiceonline.json");
client .on ("message", async (Message) => {
    if (!Message ["guild"] ||
    Message ["author"].bot) return false;
    if (Message ["content"].startsWith (prefix + "setvc")) {
        if (!Message ["member"].hasPermission ("MANAGE_CHANNELS")) return Message ["reply"] ("**You need `MANAGE CHANNELS` Permissions to execute this command.**");
        var name = Message ["content"].split (" ").slice (1).join (" ");
        if (!name) return Message ["reply"] ("**Specify a name. please type %vo% for Connected numbers\nExample: " + prefix + "setvc 💠S3 Online💠 [%vo%]**");
        var onlines = Message ["guild"].members.filter (m => m.voiceChannel).size;
        Message ["guild"].createChannel (name ["replace"] ("%vo%", onlines), "voice") .then (async (voice) => {
            voiceonline [Message ["guild"].id] = {
                "ch": (voice ["id"]),
                "name": (name)
            };
            saveVoiceOnline ();
            Message ["channel"].send ("**Successfully created voiceonline **")
        });
    }
})
.on ("voiceStateUpdate", async (Steve, Akame) => {
    if (!voiceonline [Steve ["guild"].id]) return console.log ("nope");
    var channel = Akame ["guild"].channels.get (voiceonline [Steve ["guild"].id].ch);
    if (!channel) return console.log ("no channel");
    channel ["setName"] (voiceonline [Steve ["guild"].id].name.replace ("%vo%", Steve ["guild"].members.filter (m => m.voiceChannel).size));
})

function saveVoiceOnline() {
    (require ("fs")) ["writeFileSync"] ("./voiceonline.json", JSON ["stringify"] (voiceonline, null, 4))
}
//فتح الشات وقفل الشات

client.on('message', message => {

    if(message.content === `${prefix}mc`) {
                        if(!message.channel.guild) return message.reply('** This command only for servers ❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You don't have `MANAGE_CHANNELS` permission **');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("** ✅ | Done.  **")
           });
             }

 if(message.content === `${prefix}unmc`) {
                     if(!message.channel.guild) return message.reply('** This command only for servers ❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('** You don't have `MANAGE_CHANNELS` permission **');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**✅ | Done. **")
           });
             }
             
      
    
});

//clear

client.on('message', message => {  
    if (message.author.bot) return; 
    if (message.content.startsWith(prefix + 'clear')) { 
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`** You don't have Premissions!**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply(`** The number can't be more than **100** .**`).then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).then(msgs => {
    message.channel.send(`** Done , Deleted `${msgs.size}` messages.**`).then(messages => messages.delete(5000));
    })
  }
});

//color

client.on("message", message => {
  if(message.content.startsWith("color") ){
        var fsn = require('fs-nextra');
        fs.readdir('./img', async (err, files) => {
            var f = files[Math.floor(Math.random() * files.length)];
            var {
                Canvas
            } = require('canvas-constructor');
            var x = 0;
            var y = 0;
             if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0) return message.reply("can't find any colors")
            message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(() => {
                x += 100;
                if (x > 100 * 12) {
                    x = 100;
                    y += 80;
                }
            });
            var image = await fsn.readFile(`./img/${f}`);
            var xd = new Canvas(100 * 11, y + 250)
                .addBeveledImage(image, 0, 0, 100 * 11, y + 250, 50)
                .setTextBaseline('middle')
                .setColor('white')
                .setTextSize(60)
                .addText(`قائمة الالوان : ${message.guild.name}`, 140, 40);
            x = 0;
            y = 150;
            message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(role => {
                x += 75;
                if (x > 100 * 10) {
                    x = 75;
                    y += 80;
                }
                xd
                    .setTextBaseline('middle')
                    .setTextAlign('center')
                    .setColor(role.hexColor)
                    .addBeveledRect(x, y, 60, 60, 15)
                    .setColor('white');
                if (`${role.name}`.length > 2) {
                    xd.setTextSize(30);
                } else if (`${role.name}`.length > 1) {
                    xd.setTextSize(40);
                } else {
                    xd.setTextSize(50);
                }
                xd.addText(role.name, x + 30, y + 30);
            });
            message.channel.sendFile(xd.toBuffer());
        });
    }
})


client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if(message.content.startsWith("colors") ){
    const embedd = new Discord.RichEmbed()
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**There's No Color With This Number** :x: `)
      .setColor(`ff0000`);

    if (!isNaN(args) && args.length > 0)
      if (!message.guild.roles.find("name", `${args}`))
        return message.channel.sendEmbed(embedd);

    var a = message.guild.roles.find("name", `${args}`);
    if (!a) return;
    const embed = new Discord.RichEmbed()

      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**Color Changed To Successfully** :white_check_mark: `)

      .setColor(`${a.hexColor}`);
    message.channel.sendEmbed(embed);
    if (!args) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 100; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.addRole(message.guild.roles.find("name", `${args}`));
  }
});


client.on("message", message => {
  if (message.content === "cc") {
    if (!message.channel.guild) return;
    if (message.member.hasPermission("MANAGE_ROLES")) {
      setInterval(function() {});
      let count = 0;
      let ecount = 0;
      for (let x = 0; x < 100; x++) {
        message.guild.createRole({ name: x, color: "RANDOM" });
      }
    }
  }
});

//profile


client.on("message",async message => {let xp = funcs.generateInt(1, 5);
if (message.author.bot) return;
let args = message.content.split(' ');
const getvalueof = message.mentions.users.first() || client.users.get(args[1]) || message.author;
if (message.content.startsWith(prefix + "profile")) {
let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = ${getvalueof.id}`)
if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${getvalueof.id}', 1, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info"`)
let Image = Canvas.Image,canvas = Canvas.createCanvas(307, 300),ctx = canvas.getContext('2d');
fs.readFile("./profile.png", function (err, Background) { //امتداد الصورة
if (err) return console.log(err);let BG = Canvas.Image;let ground = new Image;ground.src = Background;ctx.drawImage(ground, 0, 0, 307, 300);})/// PHOTO SIZE
let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
jimp.read(url, (err, ava) => {if (err) return console.log(err);
ava.getBuffer(jimp.MIME_PNG, async( err, buf) => {if (err) return console.log(err);
ctx.font = 'Arial 23px profile';ctx.fontSize = '62px'; ctx.fillStyle = "#fff";ctx.textAlign = "center"; ctx.fillText(`${getvalueof.username}`, 160, 200)/////USERNAME
let leaderboard = await SQLite.all(`SELECT * FROM profileSystem ORDER BY xp DESC, credits DESC`);/////Rank
ctx.font = "18px Arial";ctx.fontSize = '18px';ctx.fillStyle = "#FFFFFF";ctx.textAlign = "center";////RANK
for(var i = 0;i<leaderboard.length;i++) {if(leaderboard[i].id == getvalueof.id) {ctx.fillText(`#${i+1}`, 52, 147)}}///RANK
ctx.font = "14px Arial";ctx.fontSize = '14px';ctx.fillStyle = '#FFFFFF'; ctx.textAlign = "center";ctx.fillText(`$${res.credits}`, 248 , 147)////credits
ctx.font = "15px Arial";ctx.fontSize = '15px'; ctx.fillStyle = "#FFFFFF"; ctx.textAlign = "center";ctx.fillText(`${res.xp}`, 130, 270)////XP
ctx.font = "32px Arial";ctx.fontSize = '32px';ctx.fillStyle = "#FFFFFF";ctx.textAlign = "center";ctx.fillText(`${res.level}`, 248, 95)
ctx.font = "24px Arial";ctx.fontSize = "24px";ctx.fillStyle = "#FFFFFF";ctx.textAlign = "center";ctx.fillText(`${res.rep}`, 65,95);///REPS
ctx.font = "12px Arial";ctx.fontSize = "12px";ctx.fillStyle = "#FFFFFF";ctx.textAlign = "center";ctx.fillText(`${res.info}`,150,155)
let Avatar = Canvas.Image;let ava = new Avatar;
ava.src = buf;ctx.beginPath(); ctx.arc(153.5, 85.5, 50, 0, Math.PI*2, true); ctx.clip();ctx.drawImage(ava, 100, 34, 110, 110);
message.channel.startTyping();message.channel.sendFile(canvas.toBuffer());message.channel.stopTyping();});});}})

//giveaway 



client.on('message',message => {
  if (message.author.bot) return;
  if (message.content === "help") {
  message.channel.sendMessage('**:gift: - Help Menu\n--------------------------\n:tada: | ``$start`` --> To Start a Giveaway.\n:tada: | ``$groll`` --> To Choose Another Winner.\n:tada: | ``$gend`` --> To End Giveaway.\n--------------------------**');
}
});


/////////////////
//gstart
client.on("ready", async () => {
  await dbg.defer;
  await console.log(`Logged in as [ ${client.user.username} ]!`);
  client.guilds.forEach(async g => {
    g.channels
      .filter(
        c =>
          c.type == "text" &&
          c.permissionsFor(client.user.id).has("VIEW_CHANNEL")
      )
      .forEach(async c => {
        let fetched = await c.fetchMessages();
        if (fetched.size == 0) return;
        let mess = await fetched.filter(
          r =>
            r.author.id === client.user.id &&
            r.content ==
              `**🎉 GIVEAWAY 🎉**`
        );
        if (mess.size == 0) return;
        mess.forEach(m => {
          if (!m) return;
          if (!dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`)) return;
          let time2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtime;
          let text2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtext;
          let win2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gwin;
          if (time2 === null || time2 === undefined) return;
          let embed = new RichEmbed()
            .setColor("BLUE")
            .setAuthor(`${text2}`, g.iconURL)
            .setDescription(
              `React with 🎉 to enter!\nTime remaining: ${cd(
                new Date().getTime(),
                time2
              )}`
            )
            .setFooter(`Ends at`, client.user.avatarURL)
            .setTimestamp(time2);
          let embed2 = new RichEmbed()
            .setColor("RED")
            .setAuthor(text2, g.iconURL)
            .setFooter(`Ended at`);
          let ttimer = setInterval(async () => {
            if (
              !m ||
              m.content ==
                `🎉 **GIVEAWAY ENDED** 🎉`
            )
              return;
            let ttt = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
            if (ttt.includes(moment().diff(time2, "seconds")))
              return m.edit(
                `🎉 **GIVEAWAY** 🎉`,
                embed
                  .setColor("#ffb800")
                  .setDescription(
                    `**Last chance to enter!!!**\nReact with 🎉\nTime remaining: ${cd(
                      new Date().getTime(),
                      time2
                    )}`
                  )
              );
            m.edit(
              `🎉 **GIVEAWAY** 🎉`,
              embed.setDescription(
                `React with 🎉 to enter!\nTime remaining: ${cd(
                  new Date().getTime(),
                  time2
                )}`
              )
            );
            if (moment().isAfter(time2)) {
              m.reactions
                .filter(a => a.emoji.name == "🎉")
                .map(r =>
                  r.fetchUsers().then(u => {
                    let rusers = u
                      .filter(user => !user.bot)
                      .random(parseInt(win2));
                    m.edit(
                      `${g} GIVEAWAY ENDED ${g}`,
                      embed2
                        .setTimestamp()
                        .setDescription(`Winners:\n${rusers || "No winners"}`)
                    );
                    if (
                      m.reactions
                        .filter(a => a.emoji.name == "🎉")
                        .map(reaction => reaction.count)[0] <= 1
                    ) {
                      return m.channel.send(`No winners :rolling_eyes:`);
                    } else {
                      m.channel.send(
                        `Congratulations ${rusers}! You won the **${text2}**`
                      );
                    }
                    dbg.delete(`giveaway.${g.id}.${c.id}.${m.id}.time`);
                    clearInterval(ttimer);
                    return;
                  })
                );
            }
          }, 5000);
        });
      });
  });
});

client.on("message", async message => {
  //let g = client.guilds
  //  .get("606910399811420175")
  //    .emojis.find(r => r.name === "start");
  if (message.author.bot || message.channel.type == "dm") return undefined;
  let args = message.content.split(" ");
  let timer;
  if (args[0] == `${prefix}start`) {
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1] || !args[2] || !args[3])
        return message.channel.send(
          `**Usage:** **\`${prefix}start [Time] [Winners] [Giveaway Prize]\n\`** **Example:** **\`${prefix}start 4h 1 Nitro\`**`
        );
      if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
        return message.channel.send(`I don't have **Embed Links** permission.`);
      if (ms(args[1]) === undefined)
        return message.channel.send(`Please use a proper time format.`);
      if (isNaN(args[2]))
        return message.channel.send(`Winners must be number!`);
      if (args[2] < 1 || args[2] > 10)
        return message.channel.send(`Winners must be bettwen 1 and 10.`);
      let timega = ms(args[1]) / 1000;
      let time = Date.now() + totime.fromSeconds(timega).ms();
      if (timega < 5)
        return message.channel.send(
          `Giveaway time can't be less than 5 seconds.`
        );
      let timespan = cd(new Date().getTime(), time);
      let rusers;
      let embed = new RichEmbed()
        .setColor("BLUE")
        .setAuthor(`${args.slice(3).join(" ")}`)
        .setDescription(
          `React with 🎉 to enter!\nTime remaining: ${timespan}`
        )
        .setFooter(`Ends at`, client.user.avatarURL)
        .setTimestamp(time);
      let embed2 = new RichEmbed()
        .setColor("RED")
        .setAuthor(args.slice(3).join(" "))
        .setFooter(`Ended at`);
      let msg = await message.channel
        .send(
          `**🎉 GIVEAWAY 🎉**`,
          embed
        )
        .catch(err => message.channel.send(`Error: \`${err}\``));
      dbg.set(
        `giveaway.${message.guild.id}.${message.channel.id}.${msg.id}.time`,
        {
          gtime: time,
          gid: msg.id,
          gtext: args.slice(3).join(" "),
          gwin: args[2]
        }
      );
      await msg.react("🎉");
      timer = setInterval(() => {
        if (
          !msg ||
          msg.content ==
            `**🎉 GIVEAWAY ENDED 🎉**`
        )
          return;
        let ttt = [-2, -3, -4, -5, -6, -7, -8, -9, -10];
        if (ttt.includes(moment().diff(time, "seconds")))
          return msg.edit(
            `**🎉 GIVEAWAY 🎉**`,
            embed
              .setColor("#ffb800")
              .setDescription(
                `**Last chance to enter!!!**\nReact with 🎉\nTime remaining: ${cd(
                  new Date().getTime(),
                  time
                )}`
              )
          );
        msg.edit(
          `**🎉 GIVEAWAY 🎉**`,
          embed.setDescription(
            `React with 🎉 to enter!\nTime remaining: ${cd(
              new Date().getTime(),
              time
            )}`
          )
        );
        rusers = msg.reactions
          .filter(a => a.emoji.name == "🎉")
          .map(reaction =>
            reaction.users.filter(u => !u.bot).random(parseInt(args[2]))
          )[0];
        if (moment().isAfter(time)) {
          msg.edit(
            `** GIVEAWAY ENDED 🎉**`,
            embed2
              .setTimestamp()
              .setDescription(`Winners:\n${rusers || "No winners"}`)
          );
          if (
            msg.reactions
              .filter(a => a.emoji.name == "🎉")
              .map(reaction => reaction.count)[0] <= 1
          ) {
            return message.channel.send(``);
          } else {
            msg.channel.send(
              `Congratulations ${rusers}! You won the **${args
                .slice(3)
                .join(" ")}**`
            );
          }
          clearInterval(timer);
          return;
        }
      }, 5000);
    } else return undefined;
  } else if (args[0] == `${prefix}groll`) {
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1])
        return message.channel.send(
          `**Usage:** **\`${prefix}groll [giveaway message id]\`**`
        );
      if (isNaN(args[1])) return message.channel.send(`Thats not a message ID`);
      message.channel
        .fetchMessage(args[1])
        .then(async m => {
          if (m.author.id != client.user.id)
            return message.channel.send(`This is not a giveaway message.`);
          if (!m.content.startsWith(`**🎉 GIVEAWAY**`))
            return message.channel.send(`This is not a giveaway message.`);
          if (
            m.content !=
            `**🎉 GIVEAWAY ENDED 🎉**`
          )
            return message.channel.send(`The giveaway is not ended.`);
          if (m.reactions.size < 1)
            return message.channel.send(
              `I can't find reactions in this message.`
            );
          if (
            m.reactions
              .filter(a => a.emoji.name == "🎉")
              .map(reaction => reaction.count)[0] <= 1
          )
            return message.channel.send(``);
          m.reactions
            .filter(a => a.emoji.name == "🎉")
            .map(r =>
              r.fetchUsers().then(async u => {
                let rusers = u.filter(user => !user.bot).random();
                await message.channel.send(`The new winner is: ${rusers}`);
              })
            );
        })
        .catch(err =>
          message.channel.send(`I can't find this message in the channel.`)
        );
    } else return undefined;
  } else if (args[0] == `${prefix}gend`) {
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1])
        return message.channel.send(
          `**Usage:** **\`${prefix}gend [giveaway message id]\`**`
        );
      if (isNaN(args[1])) return message.channel.send(`Thats not a message ID`);
      message.channel
        .fetchMessage(args[1])
        .then(async m => {
          if (m.author.id != client.user.id)
            return message.channel.send(`This is not a giveaway message.`);
          if (!m.content.startsWith(`**🎉 GIVEAWAY**`))
            return message.channel.send(`This is not a giveaway message.`);
          if (
            m.content ==
            `**🎉 GIVEAWAY ENDED 🎉**`
          )
            return message.channel.send(`The giveaway is ended.`);
          if (m.reactions.size < 1)
            return message.channel.send(
              `I can't find reactions in this message.`
            );
          let gv = dbg.get(
            `giveaway.${message.guild.id}.${message.channel.id}.${m.id}.time`
          );
          let rusers = m.reactions.map(r =>
            r.users.filter(u => !u.bot).random(parseInt(gv.gwin))
          );
          let embed2 = new RichEmbed()
            .setColor("RED")
            .setAuthor(gv.gtext)
            .setFooter(`Ended at`);
          m.reactions
            .filter(a => a.emoji.name == "🎉")
            .map(r =>
              r.fetchUsers().then(async u => {
                let rusers = u
                  .filter(user => !user.bot)
                  .random(parseInt(gv.gwin));
                m.edit(
                  `**🎉 GIVEAWAY ENDED 🎉**`,
                  embed2
                    .setTimestamp()
                    .setDescription(`Winners:\n${rusers || "No winners"}`)
                );
                if (
                  m.reactions
                    .filter(a => a.emoji.name == "🎉")
                    .map(reaction => reaction.count)[0] <= 1
                ) {
                  return message.channel.send(`No winners :rolling_eyes:`);
                } else {
                  message.channel.send(
                    `Congratulations ${rusers}! You won the **${gv.gtext}**`
                  );
                }
                await dbg.delete(
                  `giveaway.${message.guild.id}.${message.channel.id}.${m.id}.time`
                );
                return;
              })
            );
        })
        .catch(err =>
          message.channel.send(`I can't find this message in the channel.`)
        );
    } else return undefined;
  }
});





//Log


client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setlog")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "togglelog")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __On__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __Off__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` \n**Sent By:** <@${message.author.id}> \n\n**Message:**\n\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully EDIT **MESSAGE** In ${oldMessage.channel}\n\n\n**Channel:** ${oldMessage.channel.name}\n\n\n**Sent By:** <@${oldMessage.author.id}> \n\n\n**Old Message:**\n\`\`\` ${oldMessage} \`\`\`\n **New Message:** \n \`\`\`${newMessage}\`\`\` `
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});
client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` \n**By:** <@${userID}>`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` \n**By:** <@${userID}>`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});
client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\`\n**By:** <@${userID}>`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\`\n**By:** <@${userID}>`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} \n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[user.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[user.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> \n**By:** <@${userID}>`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[guild.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}>\n**By:** <@${userID}>`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`His Orginal Name`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`His Orginal Name`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember}\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}>\n**Role:** \`\`${role.name}\`\`\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}>\n**Role:** \`\`${role.name}\`\`\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}>\n**New Owner:** <@${newMember.user.id}>`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld}\n**By:** <@${userID}>\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("BLUE")
        .setDescription(
          `**User:** ${voiceOld}\n**By:** <@${userID}>\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld}\n**By:** <@${userID}>\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])//////Create By The Leader#0187
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAF]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
        .setColor("GREEN")//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
        .setDescription(
          `**User:** ${voiceOld}\n**By:** <@${userID}>\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``
        )//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
        .setTimestamp()//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
        .setFooter(userTag, userAvatar);//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561

      logChannel.send(serverUndeafv);//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
    }
  });//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()//////Create By The Leader#0187
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\`\n**To:** \`\`${voiceNew.voiceChannel.name}\`\`\n**User:** ${voiceOld}`
      )//////! .₳Ⱨ₥ɆĐ ♡#0561
      .setTimestamp()//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
    logChannel.send(voiceLeave);
  }
});




//id 

client.on('message', message => { 
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`Probot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });



















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



   



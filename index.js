const Discord = require("discord.js");
const client = new Discord.Client();
var entity = "<@382115660336988161>";

client.on("message", message => {

  var args = message.content.substring(entity.length).trim().split(/ +/g);

  if (message.toString().startsWith(entity) && !message.toString().endsWith(entity)) {

    message.reply("Working!");

  }

  if (!message.toString().startsWith(entity) && message.toString().endsWith(entity)) {

    message.reply("Working!");

  }

});


client.login(process.env.BOT_TOKEN);

const Discord = require("discord.js");
const client = new Discord.Client();
var entity = "<@382115660336988161>";

client.on("message", async msg => {
  var args = msg.content.substring(entity.length).trim().split(/ +/g);
  if (msg.toString().startsWith(entity)) {
    if (args == "ping") {
      var ping = Math.round(client.ping);
      msg.channel.send(`Ping is ${ping}ms`);
    }
  }
});


client.login(process.env.BOT_TOKEN);

const Discord = require("discord.js");
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

client.on("ready", () => {
  console.log(`Logged in...`);
});
const prefix = `!`;
client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  // get channel id and command out of message
  const channelId = message.channel.id;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();
  if (command === 'pelle') {
    // after successfully create the play space, response to the user that call this command.
    message.reply('VAD VILL DU???');
  }
});

client.login("MTEwMzczNjkxNDc5Nzk0MDc0MA.GvpG98.v-r6IKSBFqgLlk3z6PGvdAxib-MJXor2rcHCq0");
const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const Discord = require('discord.js');
const { token, prefix } = require('../Ignorer/config.js');
bot = new Discord.Client

config = require('../Ignorer/config.json'),
fs = require('fs')
 
bot.login(`${token}`)

bot.on('ready', () => {
    console.log("Bot successfully logged in !")
});

bot.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return;
})

bot.on ('message', message => {
    if (message.content.startsWith(`${prefix}Bonjour`)) {
        message.channel.send("Hey BG !");
    };
});


bot.on('message', message => {
    if (message.content === 'help'){
    message.reply('le bot est en **dévellopement** si tu veux faire une suggestion dm nat ou renardNocturne ^^')
  }
})

bot.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'how to embed') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
      const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('A slick little embed')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('Hello, this is a slick embed!');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });
const Discord = require('discord.js'),
const { token, prefix } = require('../Ignorer/config.js'),
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
    if (message.content.startsWith(`${prefix} Bonjour`)) {
        message.channel.send("Hey BG !");
    };
});


bot.on('message', message => {
    if (message.content === 'help'){
    message.reply('le bot est en **dévellopement** si tu veux faire une suggestion dm nat ou renardNocturne ^^ ')
  }
})
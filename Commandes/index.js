const Discord = require('discord.js'),

bot = new Discord.Client

config = require('../Autres/config.json'),
fs = require('fs')
 
bot.login(config.token)

bot.on('ready', () => {
    console.log("Bot successfully logged in !")
});

bot.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return;
})

bot.on ('message', message => {
    if (message.content.startsWith( + "Bonjour")) {
        message.send("Hey BG !");
    };
})
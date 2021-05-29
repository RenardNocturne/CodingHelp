const Discord = require('discord.js'),

bot = new Discord.Client

config = require('../BotDiscord -CodingTtime-/config.json'),
fs = require('fs')
 
bot.login(config.token)

bot.on('ready', () => {
    console.log("Bot successfully logged in !")
});

bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong !')
    }
  })


  bot.on('message', message => {
      if (message.content === 'help'){
      message.reply('le bot est en **dévellopement** si tu veux faire une suggestion dm nat ou renardNocturne ^^ ')
    }
  })
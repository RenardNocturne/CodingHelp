const { prefix, TOKEN } = require('./Ignore/config');
const { loadCommands, loadEvents } = require('./Utils/loader')
const Discord = require('discord.js');

const bot = new Discord.Client();
["commands", "cooldowns", "perms"].forEach(element => bot[element] = new Discord.Collection());

loadEvents(bot);
loadCommands(bot);

bot.login(TOKEN)

const { loadCommands, loadEvents } = require('./Utils/loader')
const Discord = require('discord.js');

const bot = new Discord.Client();
require("discord-buttons")(bot);
require('./Utils/functions')(bot);
bot.config = require('./Ignore/config')
bot.mongoose = require('./Utils/mongoose');

["commands", "cooldowns", "perms"].forEach(element => bot[element] = new Discord.Collection());

loadEvents(bot);
loadCommands(bot);

bot.mongoose.init();

bot.login(bot.config.TOKEN)

const { loadCommands, loadEvents } = require('./Utils/loader')
const Discord = require('discord.js');

const bot = new Discord.Client();
require("discord-buttons")(bot);
bot.config = require('./Ignore/config')

const colls = ["commands", "cooldowns", "perms"]
colls.forEach(element => bot[element] = new Discord.Collection());

loadEvents(bot);
loadCommands(bot);

bot.login(bot.config.TOKEN)

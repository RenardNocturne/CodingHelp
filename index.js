const { TOKEN } = require('./Ignore/config');
const { loadCommands, loadEvents } = require('./Utils/loader')
const Discord = require('discord.js');

const bot = new Discord.Client();
require('./Utils/functions')(bot);
bot.mongoose = require('./Utils/mongoose');

["commands", "cooldowns", "perms"].forEach(element => bot[element] = new Discord.Collection());

loadEvents(bot);
loadCommands(bot);

bot.mongoose.init();

bot.login(TOKEN)

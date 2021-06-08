const { prefix, TOKEN } = require('./Ignore/config');
const Discord = require('discord.js');
const { readdirSync } = require('fs');

const bot = new Discord.Client();
["commands", "cooldowns", "perms"].forEach(element => bot[element] = new Discord.Collection());

const loadEvents = (dir = './Events') => {
  readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));

    for (const event of events) {
      const evt = require(`${dir}/${dirs}/${event}`);
      const evtName = event.split(".")[0];
      bot.on(evtName, evt.bind(null, bot));

      console.log(`L'évènement ${evtName} a bien été chargée !`);
    };
  });
};



const loadCommands = (dir = './Commands') => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      bot.commands.set(getFileName.help.name, getFileName);
      console.log(`La commande ${getFileName.help.name} a bien été chargée !`);
    };
  });
};

loadEvents();
loadCommands();

bot.login(TOKEN)

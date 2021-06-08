const { readdirSync } = require('fs');
const Discord = require('discord.js');

const loadEvents = (bot, dir = './Events') => {
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));

        for (const event of events) {
        const evt = require(`../${dir}/${dirs}/${event}`);
        const evtName = event.split(".")[0];
        bot.on(evtName, evt.bind(null, bot));

        console.log(`L'évènement ${evtName} a bien été chargée !`);
        };
    });
};
  
  
  
const loadCommands = (bot, dir = './Commands') => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
        const getFileName = require(`../${dir}/${dirs}/${file}`);
        bot.commands.set(getFileName.help.name, getFileName);
        console.log(`La commande ${getFileName.help.name} a bien été chargée !`);
        };
    });
};

function convertTtD(timestamp) {
const d = new Date( timestamp );
date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
return date;
};

module.exports = {
    loadCommands,
    loadEvents,
    convertTtD,
}
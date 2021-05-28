const Discord = require('discord.js');
const { token, prefix } = require('../Ignorer/config.js');
const { MessageEmbed } = require('discord.js');
bot = new Discord.Client

config = require('../Ignorer/config.json'),
fs = require('fs')
 
bot.login(`${token}`)

bot.on('ready', () => {
    console.log("Bot successfully logged in !")

    bot.user.setPresence({ activity: { name: `l'alpha de CodingHelp.`, type: 'WATCHING' }, status: 'online'})
      .then(console.log)
      .catch(console.error);
});

bot.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    function embedMaker (title = "Titre", description = "Quelque chose semble causer problème :thinking:", footer = `Demandée par ${message.author.username}`, color = "5D6C9D") {
      const embed = new MessageEmbed()
        .setTitle(title)
        .setColor(color)
        .setDescription(description)
        .setFooter(footer)
        .setTimestamp();
      return embed
    };
    
    if (command === "bonjour") {
      message.channel.send("Hey BG !");
    };

    if (command === "help") {
      message.channel.send(embedMaker(":warning: Le bot est en cours de développement ! :warning:", `**Je suis actuellement en Alpha** la seule commande actuellement disponible est **${prefix}suggest** afin d'envoyer vos suggestions à Nat et RenardNocturne ! **Si vous repérez un bug/dysfonctionnement** n'hésitez pas non plus à utiliser cette commande !`))
    };
})
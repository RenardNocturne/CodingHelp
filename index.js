const Discord = require('discord.js');
const { token, prefix } = require('./Ignorer/config.js');
const { MessageEmbed, Collection, Client } = require('discord.js');

config = require('./Ignorer/config.json');
fs = require('fs');

const bot = new Client();
bot.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.login(`${token}`)

bot.on('ready', () => {
    console.log("Bot successfully logged in !")

    bot.user.setPresence({ activity: { name: `l'alpha de CodingHelp.`, type: 'WATCHING' }, status: 'online'})
      .then()
      .catch(console.error);
});

bot.on('message', message => {
    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if (message.type !== 'DEFAULT' || message.author.bot || !bot.commands.has(command)) return;

    function embedMaker (title = "Titre", description = "Quelque chose semble causer problème :thinking:", footer = `Demandée par ${message.author.username}`, color = "5D6C9D") {
      return new MessageEmbed()
        .setTitle(title)
        .setColor(color)
        .setDescription(description)
        .setFooter(footer)
        .setTimestamp();
    };

    bot.commands.get(command).execute(message, args, embedMaker, prefix);
})
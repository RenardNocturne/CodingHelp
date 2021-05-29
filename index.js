const { token, prefix } = require('./Ignorer/config.js');
const Discord = require('discord.js')

config = require('./Ignorer/config.json');
fs = require('fs');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
  console.log(`La commande ${command.name} a été chargée !`)
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

    bot.commands.get(command).execute(bot, message, args, embedMaker, prefix, embedError);

    function embedMaker (title = "Titre", description = "Quelque chose semble causer problème :thinking:", footer = `Demandée par ${message.author.username}`, color = "5D6C9D", image = undefined, thumnail = undefined) {
      const Logo = new Discord.MessageAttachment('./img/PP.jpg')
      return new Discord.MessageEmbed()
        .attachFiles(Logo)
        .setTitle(title)
        .setColor(color)
        .setImage(image)
        .setThumbnail(thumnail)
        .setDescription(description)
        .setFooter(footer, `${message.author.avatarURL()}`)
        .setTimestamp();
    };
    
    function embedError (description = "Quelque chose semble causer problème :thinking:") {
      return new Discord.MessageEmbed()
        .setTitle("Une erreur est survenue !")
        .setColor("DE2916")
        .setDescription(description)
        .setFooter(`Demandée par ${message.author.username}`, `${message.author.avatarURL()}`)
        .setTimestamp();
    };
});
const { token, prefix } = require('./Ignorer/config.js');

const Discord = require('discord.js');
const { readdirSync } = require('fs');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const loadCommands = (dir = './commands') => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      bot.commands.set(getFileName.help.name, getFileName);
      console.log(`La commande ${getFileName.help.name} a bien été chargée !`);
    };
  });
};

loadCommands();

bot.login(`${token}`)

bot.on('ready', () => {
    console.log("Bot successfully logged in !")

    bot.user.setPresence({ activity: { name: `l'alpha de CodingHelp.`, type: 'WATCHING' }, status: 'online'})
      .then()
      .catch(console.error);
});

bot.on('message', message => {
    const args = message.content.slice(prefix.length).split(/ +/);

    const commandName = args.shift().toLowerCase();

    if (message.type !== 'DEFAULT' || message.author.bot || !bot.commands.has(commandName)) return;
    
    const command = bot.commands.get(commandName);

    if (command.help.args && !args.length) {
      return message.channel.send(embedError(`Un ou plusieurs arguments étaient attendus ! \n \n **Utilisation attendue:** \n \`${prefix}${command.help.name} ${command.help.usage}\` \n \n *[Obligatoire], <Optionnel>*`))
    }

    command.run(bot, message, args, embedMaker, prefix, embedError);

    function embedMaker (title = "Titre", description = "Quelque chose semble causer problème :thinking:", footer = `Demandée par ${message.author.username}`, color = "5D6C9D", image = undefined, thumbnail = undefined) {
      return new Discord.MessageEmbed()
        .setTitle(title)
        .setColor(color)
        .setImage(image)
        .setThumbnail(thumbnail)
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
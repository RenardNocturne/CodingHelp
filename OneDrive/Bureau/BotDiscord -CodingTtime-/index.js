const { prefix, TOKEN } = require('./Ignorer/config.js');

const Discord = require('discord.js');
const { readdirSync } = require('fs');

const bot = new Discord.Client();
["commands", "cooldowns", "perms"].forEach(element => bot[element] = new Discord.Collection());

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

bot.login(TOKEN)

bot.on('ready', () => {
    console.log("Bot successfully logged in !")

    bot.user.setPresence({ activity: { name: `son propre développement.`, type: 'WATCHING' }, status: 'online'})
      .then()
      .catch(console.error);
});

bot.on('message', message => {

    //constantes
    const args = message.content.slice(prefix.length).split(/ +/);

    const commandName = args.shift().toLowerCase();
    const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    //sécurité
    if (message.type !== 'DEFAULT' || message.author.bot || !command) return;
    
    //args
    if (command.help.args && !args.length) {
      return message.channel.send(embedError(undefined, `Un ou plusieurs arguments étaient attendus ! \n \n **Utilisation attendue:** \n \`${prefix}${command.help.name} ${command.help.usage}\` \n \n *[Obligatoire], <Optionnel>*`))
    }

    //cooldowns
    if (!bot.cooldowns.has(command.help.name)) {
      bot.cooldowns.set(command.help.name, new Discord.Collection()); //nouvelle collec
    }

    const time = Date.now(); //la date
    const Timestamp = bot.cooldowns.get(command.help.name);
    const delay = (command.help.cooldown || 0) * 1000; //valeur par défaut = 0 + on convertit en secondes

    if (Timestamp.has(message.author.id)) {

      const Expiration = Timestamp.get(message.author.id) + delay;
      tLeft = ((Expiration - time) / 1000);

      if (time < Expiration) {
        return message.channel.send(embedError(`Pas si vite !`, `${message.author.username} laissez-moi **${tLeft.toFixed(0)} secondes** le temps de retrouver mes esprits ! Après quoi, la commande ${command.help.name} sera de nouveau disponible.`))
      }
    }

    //perms
    function Maj(str){
      return (str + ' ').charAt(0).toUpperCase() + str.substr(1);
    };

    const botPerms = [];

    command.help.botPerms.forEach(perm => 
      botPerms.push(
        '> ' + Maj(perm.toLowerCase().replace('_', ' ')) + '\n'
      )
    );
    
    const userPerms = [];

    command.help.userPerms.forEach(perm => 
      userPerms.push(
        '> ' + Maj(perm.toLowerCase().replace('_', ' ')) + '\n'
      )
    );
    

    if(!message.member.permissions.has(command.help.userPerms)) return message.channel.send(embedError("Une ou plusieurs permissions manquantes !", `Certaines permissions semblent manquées. \n\n *__Permissions requises pour effectuer la commande:__* \n  ${userPerms}`.replace(',', '')));
    if(!message.guild.me.permissions.has(command.help.botPerms)) return message.channel.send(embedError("Une ou plusieurs permissions manquantes !", `Certaines permissions semblent me manquer. \n\n *__J'ai besoin des permissions:__* \n  ${botPerms}`.replace(',', '')));

    Timestamp.set(message.author.id, time);
    setTimeout(() => Timestamp.delete(message.author.id), delay)

    command.run(bot, message, args, embedMaker, prefix, embedError);

    //fonctions
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
    
    function embedError (title = "Une erreur est survenue", description = "Quelque chose semble causer problème :thinking:") {
      return new Discord.MessageEmbed()
        .setTitle(title)
        .setColor("DE2916")
        .setDescription(description)
        .setFooter(`Demandée par ${message.author.username}`, `${message.author.avatarURL()}`)
        .setTimestamp();
    };
});
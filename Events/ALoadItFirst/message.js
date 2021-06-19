const { prefix, TOKEN } = require('../../Ignore/config.js');
const { convertTtD, upperCaseFirstLettter } = require('../../Utils/loader')
const Discord = require('discord.js');

module.exports = (bot, message) => {
  
  if(message.channel.type === 'dm') return bot.emit('directMessage', message)

  //constantes
  const args = message.content.slice(prefix.length).split(/ +/);

  const commandName = args.shift().toLowerCase();
  
  const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  //sécurité
  if (message.type !== 'DEFAULT' || message.author.bot || !command) return;
  
  //args
  if (args.length < command.help.args) {
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
  setTimeout(() => Timestamp.delete(message.author.id), delay);

  //delete
  if(command.help.deletecmd === true && message.deletable) message.delete().catch(console.error()) // Si dans le command help on a mis true à delete et que le message est deletable on le delete. Si ça marche po on catch les errors

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
  
function embedError (title = "Une erreur est survenue !", description = "Quelque chose semble causer problème :thinking:") {
  return new Discord.MessageEmbed()
      .setTitle(title)
      .setColor("DE2916")
      .setDescription(description)
      .setFooter(`Demandée par ${message.author.username}`, `${message.author.avatarURL()}`)
      .setTimestamp();
  };

  command.run(bot, message, args, embedMaker, prefix, embedError, convertTtD, upperCaseFirstLettter);
}
module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {


    message.channel.send(`Nom du serveur : **${message.guild.name}**\nNombre d'utilisateurs : **${message.guild.memberCount}**`);

};

module.exports.help = {
  name: 'server',
  description: 'Server informations.',
  args: false,
  cooldown: 25,
  aliases: ['serveur', 'servere'],
  userPerms: ["ADMINISTRATOR"],
  botPerms: ["SEND_MESSAGES", "ADMINISTRATOR"]
}
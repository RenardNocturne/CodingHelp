module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {


    message.channel.send(`Nom du serveur : **${message.guild.name}**\nNombre d'utilisateurs : **${message.guild.memberCount}**`);

};

module.exports.help = {
  name: 'server',
  description: 'Server informations.',
}
module.exports = {
  name: 'server',
  description: 'Server informations.',
  execute(message) {
    message.channel.send(`Nom du serveur : **${message.guild.name}**\nNombre d'utilisateurs : **${message.guild.memberCount}**`);
  }
};
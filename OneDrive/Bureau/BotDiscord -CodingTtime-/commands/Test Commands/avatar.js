module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {


    if (!message.mentions.users.size) {
      return message.channel.send(`Votre avatar est : ${message.author.displayAvatarURL({ format: 'png' })}`);
    }

    const avatarList = message.mentions.users.map(user => {
      return embedMaker("Avatar", `L'avatar de ${user.username} est:` , undefined, undefined, `${user.displayAvatarURL({ format: 'png' })}`);
    });

    message.channel.send(avatarList);
  
}; 

module.exports.help = {
  name: 'avatar',
  description: 'Display avatar URL.',
  args: false,
  cooldown: 20,
  aliases: ['avatare', 'avtar', ],
  userPerms: ["ADMINISTRATOR"],
  botPerms: ["SEND_MESSAGES", "ADMINISTRATOR"]
}
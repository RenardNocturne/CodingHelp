const { MessageEmbed, MessageAttachment } = require('discord.js');
const Logo = new MessageAttachment('../../img/PP.jpg');

module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    const embed = new MessageEmbed()
    .setTitle('La liste des commandes actuelles')
    .setDescription("*___les commandes activent sont :___*\n> ** >_description**\n> ** >_help**\n> ** >_suggestions**\n> ** >_avatar**\n> ** >_nettoyage**\n> ** >_ping**\n> ** >_server**\n*____Les commandes non-activent sont :____*\n> ** >_play**\n> ** >_report**")
    .setFooter(`Demandée par ${message.author.username}`, `${message.author.avatarURL()}`)
    .setColor("5D6C9D")
    .setThumbnail('attachment://PP.jpg')
    .setTimestamp();
message.channel.send(embed);
}








module.exports.help = {
    name: 'commands',
    description: 'affiche les commandes du bot',
    args: false,
    cooldown: 20,
    aliases: ['commande', 'commandes'],
    userPerms: ["ADMINISTRATOR"],
    botPerms: ["SEND_MESSAGES", "ADMINISTRATOR"]
    
  }

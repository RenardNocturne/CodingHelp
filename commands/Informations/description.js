const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    const embed = new MessageEmbed()
        .setTitle('Qui suis-je ?')
        .setDescription("Je suis CodingHelp, **le bot officiel du serveur discord CodingTime !** Tout ce dont le serveur aura besoin, je lui apporterai ! \n \n *__Mes développeurs:__* \n > <@!715488349724344361> \n > <@!240719395352084480> \n \n Si vous souhaitez suivre l'avancement du prrojet **rendez-vous sur GitHub:** https://github.com/RenardNocturne/CodingHelp")
        .setFooter(`Demandée par ${message.author.username}`, `${message.author.avatarURL()}`)
        .setColor("5D6C9D")
        .setThumbnail('attachment://PP.jpg')
        .setTimestamp();
    message.channel.send(embed);
}

module.exports.help = {
    name: "description",
    description: "Faites connaissance avec CodingHelp !",
    args: false,
    usage: '',
    cooldown: 25,
    aliases: ['desc'],
    userPerms: [],
    botPerms: [],
}
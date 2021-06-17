
const { MessageEmbed, MessageAttachment } = require('discord.js');
const { convertTtD } = require('../../Utils/loader');

module.exports.run = (bot, message, args, embedMaker, prefix, embedError, convertTtD, upperCaseFirstLettter) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    let memberStatus;
    switch (user.presence.status) {
        case 'online':
            memberStatus = 'En ligne';
        break;
        case 'idle':
            memberStatus = 'Inactif';
        break;
        case 'offline':
            memberStatus = 'Invisible';
        break;
        case 'dnd':
            memberStatus = 'Ne pas déranger';
        break;
    }

    let act;
    user.presence.activities.forEach(activitie => {
        switch (activitie.type) {
            case 'PLAYING':
                act += '> \n > En train de jouer à ';
            break;
            
            case 'WATCHING':
                act += '> \n > Reagrde ';
            break;

            case 'LISTENNING':
                act += '> \n > Ecoute ';
            break;

            case 'STREAMING':
                act += '> \n > En train de streamer ';
            break;

            case 'CUSTOM_STATUS':
                act += '> \n > ' + activitie.state + '\n';
            break;

            default:
                act += '';
            break;
        }
        if (activitie.type !== 'CUSTOM_STATUS') {
            act += activitie.name + '\n';
        } 
    })
    
    const member = message.guild.member(user);
    
    const embed = new MessageEmbed()
        .setColor("5D6C9D")
        .setThumbnail(message.author.avatarURL)
        .setTitle(`Voici les informations de ${user.tag}`)
        .addField('Informations globales:', `\n *${user.bot ? 'Est un bot' : 'N\'est pas un bot'}* \n \n **__Statut:__** \n > ${memberStatus} \n ${act} \n \n **Compte créé à ${convertTtD(user.createdAt)}**`.replace(undefined, ''), true)
        .addField(`Informations au sein du serveur ${message.guild.name}:`, `\n **__Surnom:__** \n > ${member.nickname !== null ? `${member.nickname}` : 'Aucun'} \n \n **__Rôles:__** \n > ${member.roles.cache.map(roles => `${roles}`).join('\n > ')} \n \n **A rejoint le serveur à ${convertTtD(member.joinedAt)}**`, true)
        .setFooter(`Demandée par ${message.author.username}`, `${message.author.avatarURL()}`)
        .setTimestamp();
    message.channel.send({embed});
}

module.exports.help = {
    name: "userinfo",
    category: 'informations',
    description: "Vous renvoie les informations d'un utilisateur (vous par défaut) !",
    args: false,
    usage: '<Utilisateur à scanner>',
    cooldown: 25,
    aliases: ["userinfos"],
    userPerms: [],
    botPerms: [],
    deletecmd: true,
}
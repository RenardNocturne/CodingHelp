module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    let annonceRole = '849313732785733732';

    if (message.member.roles.cache.has(annonceRole)) {
        message.member.roles.remove(annonceRole)
        message.channel.send(embedMaker("Rôle retiré !", `${message.author.username}, vous venez de perdre le rôle ${message.member.guild.roles.cache.get(annonceRole)}`)).then(msg => msg.delete({timeout: 5000}))
    } else {
    message.channel.send(embedMaker("Rôle accordé !", `${message.author.username}, vous venez de recevoir le rôle ${message.member.guild.roles.cache.get(annonceRole)}`)).then(msg => msg.delete({timeout: 5000}))
    message.member.roles.add(annonceRole)
    }
}

module.exports.help = {
name: 'anotif',
category: 'autoroles',
description: 'Vous ajoute/retire le rôle de notifications d\'annonces.',
args: false,
usage: "",
cooldown: 0,
aliases: ['annoncenotif', 'anotifs', 'annoncenotifs', 'annoncesnotifs'],
userPerms: [],
botPerms: ['MANAGE_ROLES'],
deletecmd: true,
}
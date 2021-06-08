module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    let botRole = '851824887597105192';

    if (message.member.roles.cache.has(botRole)) {
        message.member.roles.remove(botRole)
        message.channel.send(embedMaker("Rôle retiré !", `${message.author.username}, vous venez de perdre le rôle ${message.member.guild.roles.cache.get(botRole)}`)).then(msg => msg.delete({timeout: 5000}))
    } else {
    message.channel.send(embedMaker("Rôle accordé !", `${message.author.username}, vous venez de recevoir le rôle ${message.member.guild.roles.cache.get(botRole)}`)).then(msg => msg.delete({timeout: 5000}))
    message.member.roles.add(botRole)
    }
}

module.exports.help = {
name: 'botnotif',
category: 'autoroles',
description: 'Vous ajoute/retire le rôle de notifications d\'annonces bot.',
args: false,
usage: "",
cooldown: 0,
aliases: ['botnotifs'],
userPerms: [],
botPerms: ['MANAGE_ROLES'],
deletecmd: true,
}
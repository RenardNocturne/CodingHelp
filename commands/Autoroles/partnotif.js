module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    let partRole = '859031598590459924';

    if (message.member.roles.cache.has(partRole)) {
        message.member.roles.remove(partRole)
        message.channel.send(embedMaker("Rôle retiré !", `${message.author.username}, vous venez de perdre le rôle <@&${partRole}>`)).then(msg => msg.delete({timeout: 5000}))
    } else {
    message.channel.send(embedMaker("Rôle accordé !", `${message.author.username}, vous venez de recevoir le rôle <@&${partRole}>`)).then(msg => msg.delete({timeout: 5000}))
    message.member.roles.add(partRole)
    }
}

module.exports.help = {
name: 'partnotif',
category: 'autoroles',
description: 'Vous ajoute/retire le rôle de notifications d\'annonces partenariats.',
args: false,
usage: "",
cooldown: 0,
aliases: ['partnotifs'],
userPerms: [],
botPerms: ['MANAGE_ROLES'],
deletecmd: true,
}
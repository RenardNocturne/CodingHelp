module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    let annonceRole = '849313732785733732';

    if (message.member.roles.cache.has(annonceRole)) {
        message.channel.send(embedError(undefined, `${message.author.username} le rôle ${message.member.roles.cache.get(annonceRole)} vous a déjà été attribué !`))
    } else {
    message.channel.send(embedMaker("Rôle accordé !", `${message.author.username}, vous venez de recevoir le rôle ${message.member.guild.roles.cache.get(annonceRole)}`))
    message.member.roles.add(annonceRole)
    console.log(message.member.guild.roles.cache)
    }
}

module.exports.help = {
name: 'anotif',
description: 'Vous ajoute le rôle de notifications d\'annonces.',
args: false,
usage: "",
cooldown: 15,
aliases: ['annoncenotif', 'anotifs', 'annoncenotifs', 'annoncesnotifs'],
userPerms: [],
botPerms: ['MANAGE_ROLES']
}
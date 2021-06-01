module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    let annonceRole = '849313732785733732';

    if (!message.member.roles.cache.has(annonceRole)) {
        message.channel.send(embedError(undefined, `${message.author.username} vous n'avez pas le rôle ${message.guild.roles.cache.get(annonceRole)} !`))
    } else {
    message.member.roles.remove(annonceRole)
    message.channel.send(embedMaker("Rôle retiré !", `${message.author.username}, vous venez de perdre le rôle ${message.member.guild.roles.cache.get(annonceRole)}`))
    } console.log(message.guild.roles.cache)
}

module.exports.help = {
    name: 'removeanotif',
    description: 'Vous ajoute le rôle de notifications d\'annonces.',
    args: false,
    usage: "",
    cooldown: 15,
    aliases: ['removeanotifs'],
    userPerms: [],
    botPerms: ['MANAGE_ROLES']
}
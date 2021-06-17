module.exports.run = async (bot, message, args, embedMaker, prefix, embedError, convertTtD, upperCaseFirstLettter) => {

    ticket = message.guild.channels.cache.get(message.channel.id);
    function suppr () {
        ticket.delete().catch(errors => console.log(errors))
    }

    if (ticket.name.startsWith('ticket-de-')) {
        message.channel.send(embedMaker('Fermeture du ticket !', 'Ce ticket est **en cours de fermeture !**')); 
        setTimeout(suppr, 20000)
    } else {
        return message.channel.send(embedError(undefined, 'Ce salon n\'est pas un ticket !'));
    }
}

module.exports.help = {
    name: "close",
    category: 'tickets',
    description: "Ferme un ticket !",
    args: false,
    usage: "",
    cooldown: 0,
    aliases: ['closeticket'],
    userPerms: [],
    botPerms: ['MANAGE_CHANNELS'],
    deletecmd: true,
}
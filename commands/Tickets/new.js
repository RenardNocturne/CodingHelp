module.exports.run = async (bot, message, args, embedMaker, prefix, embedError, convertTtD, upperCaseFirstLettter) => {

    let messageContent = args.join(' ');
    
    await message.guild.channels.create(`ticket-de-${message.author.username}`, {
        type: 'text',
        topic: messageContent,
        position: 0,
        reason: messageContent,
        parent: '855119683081338891',
        permissionOverwrites: [
            {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL'],
            },
            {
                id: message.author.id,
                allow: ['VIEW_CHANNEL'],
            },
            {
                id: '825764558093156372',
                allow: ['VIEW_CHANNEL']
            },
            {
                id: '830056374876110848',
                allow: ['VIEW_CHANNEL']
            },
            {
                id: '825763643688878101',
                allow: ['VIEW_CHANNEL']
            },
            {
                id: '843397502228627457',
                allow: ['VIEW_CHANNEL']
            }
        ],
    }).then(newChannel => msgReplied = bot.channels.cache.find(channel => channel.id === newChannel.id).send(`<@!${message.author.id}>`, embedMaker('Nouveau ticket en vue !', `Ticket ouvert par <@!${message.author.id}> \n \n **__Raison:__** \n > ${messageContent} \n \n *Utilisez la commande \`>_close\` une fois que le problème est réglé !*`)).then(msg => msg.pin()))
}

module.exports.help = {
    name: "new",
    category: 'tickets',
    description: "Créer un nouveau ticket !",
    args: true,
    usage: "[Raison]",
    cooldown: 20,
    aliases: ['newticket'],
    userPerms: [],
    botPerms: ['MANAGE_CHANNELS'],
    deletecmd: true,
}
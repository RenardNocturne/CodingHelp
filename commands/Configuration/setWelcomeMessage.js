const { saveBdd } = require("../../Utils/loader");
const bdd = require('../../Utils/bdd.json')

module.exports.run = async (bot, message, args, embedMaker, prefix, embedError) => {
    const msgContent = args.join(' ');
    const filter = msg => msg.author.id === message.author.id;

    if (msgContent !== '') {
        bdd["welcomeMessage"] = msgContent;
        saveBdd();
        message.delete().catch(err => console.log(err));
        return message.channel.send(embedMaker('Nouveau message de bienvenue:', msgContent))
    };

    message.channel.send(embedMaker('Choisissez votre nouveau message de bienvenue !', 'Que souhaitez vous utiliser comme message de bienvenue ? \n \n *Astuce: Utilisez* `${member.guild.memberCount}` *ou* `${member.guild.name}` *!* \n *Utilisez `cancel` pour arrêter avant 1 minute.*')).then((repMsg) => {
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 60000,
            errors: ['time'],
        }).then((collected) => {
            msg = collected.first();
            msg.delete().catch(err => console.log(err));

            if (msg.content.toLowerCase() === 'cancel') return message.channel.send(embedError(undefined, `Commande interrompue par ${message.author.username}`));
            bdd['welcomeMessage'] = msg.content;
            saveBdd();
            
            return message.channel.send(embedMaker('Nouveau message de bienvenue:', msg.content));
            
        }).catch((errors) => {
            message.channel.send(embedError(undefined, '**Temps écoulé !**'))
        })
    })
}

module.exports.help = {
name: 'setWelcomeMessage',
category: 'configuration',
description: 'Permet de personnaliser le message de bienvenue.',
args: false,
usage: "<Nouveau message de bienvenue>",
cooldown: 10,
aliases: ['setwelcomemessage', 'setwelmsg', 'setWelMsg'],
userPerms: [],
botPerms: [],
deletecmd: true,
}
module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    let messageArgs = args.join(' ');

    bot.channels.cache.get('849347521352695868').send(embedMaker("Nouveau report en vue !", messageArgs));
    message.channel.send(embedMaker("Report envoyé !", `${message.author.username}, votre report a bien été envoyé ! Merci de nous faire évoluer !`))
}
module.exports.help = {
name: "report",
description: "report un bug ou un joueur !",
args: true,
usage: "[message]",
cooldown: 25,
aliases: ['reporte'],
userPerms: [],
botPerms: [],
}
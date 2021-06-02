module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    let messageArgs = args.join(' ');

    bot.channels.cache.get('849610360319508490').send(embedMaker("Nouveau report en vue !", messageArgs));

    message.author.send((embedMaker("Report envoyé !", `${message.author.username}, votre report a bien été envoyé ! Merci de nous faire évoluer !\n \n \`${messageArgs}\``)))
    .catch(() => message.channel.send(embedError(undefined, `${message.author.username}, il semblerait que vous soyez fermés au messages privés ! **Votre message à tout de même été envoyé !**`)));
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
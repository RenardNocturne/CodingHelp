module.exports.run = async (bot, message, args, embedMaker, prefix, embedError, convertTtD, upperCaseFirstLettter, settings) => {

    const newSetting = args.slice(0).join(' ')

    if (newSetting) {
        await bot.updateGuild(message.guild, { prefix: newSetting });
        return message.channel.send(embedMaker('Préfixe modifié:', `L'ancien préfixe \`${settings.prefix}\` a été changé en ${newSetting}`))
    } else {
        message.channel.send(embedMaker('Préfixe actuel:', `Le préfixe actuel est ${settings.prefix}`))
    }
    console.log(newSetting);
}

module.exports.help = {
name: 'setPrefix',
category: 'configuration',
description: 'Vous Permet de modifier le préfix du bot.',
args: false,
usage: "<Nouveau préfixe>",
cooldown: 0,
aliases: ['prefix'],
userPerms: ['ADMINISTRATOR'],
botPerms: [],
deletecmd: true,
}
  
module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    message.channel.send(embedMaker(":warning: Le bot est en cours de développement ! :warning:", `**Je suis actuellement en Alpha** la liste des commandes actuellement disponibles sont trouvables avec **${prefix}commands** ! **Si vous repérez un bug/dysfonctionnement** n'hésitez pas non plus à utiliser la commande **${prefix}report** !`))
}

module.exports.help = {
    name: "help",
    description: "Vous renvoies la liste des commandes disponibles !",
    args: false,
    cooldown: 25,
    aliases: ['halp'],
    userPerms: ["ADMINISTRATOR"],
    botPerms: ["SEND_MESSAGES", "ADMINISTRATOR"]
}
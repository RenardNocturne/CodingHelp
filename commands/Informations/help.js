module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    message.channel.send(embedMaker(":warning: Le bot est en cours de développement ! :warning:", `**Je suis actuellement en Alpha** la seule commande actuellement disponible est **${prefix}suggestions** afin d'envoyer vos suggestions à Nat et RenardNocturne ! **Si vous repérez un bug/dysfonctionnement** n'hésitez pas non plus à utiliser cette commande !`))
}

module.exports.help = {
    name: "help",
    category: 'informations',
    description: "Vous renvoies la liste des commandes disponibles !",
    args: false,
    usage: '',
    cooldown: 25,
    aliases: ["halp"],
    userPerms: [],
    botPerms: [],
    deletecmd: true,
}
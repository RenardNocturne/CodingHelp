module.exports = {
    name: 'help',
    description: 'Vous renvoies la liste de commandes !',

    execute(bot, message, args, embedMaker, prefix, embedError) {
        message.channel.send(embedMaker(":warning: Le bot est en cours de développement ! :warning:", `**Je suis actuellement en Alpha** la seule commande actuellement disponible est **${prefix}suggestions** afin d'envoyer vos suggestions à Nat et RenardNocturne ! **Si vous repérez un bug/dysfonctionnement** n'hésitez pas non plus à utiliser cette commande !`))
    }
}
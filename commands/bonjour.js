module.exports = {
    name: 'bonjour',
    description: 'Commande de test.',

    execute(bot, message, args, embedMaker, prefix, embedError) {
        message.channel.send("Hey BG !");
    }
}
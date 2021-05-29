module.exports = {
    name: 'bonjour',
    description: 'Commande de test.',

    execute(message, args) {
        message.channel.send("Hey BG !");
    }
}
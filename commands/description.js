module.exports = {
    name: 'description',
    description: 'Pour faire connaissance avec le bot !',

    execute(bot, message, args, embedMaker, prefix, embedError) {
        message.channel.send(embedMaker("Qui suis-je ?", "Je suis CodingHelp, **le bot officiel du serveur discord CodingTime !** Tout ce dont le serveur aura besoin, je lui apporterai ! \n \n *__Mes développeurs:__* \n > <@!715488349724344361> \n > <@!240719395352084480> \n \n Si vous souhaitez suivre l'avancement du prrojet **rendez-vous sur GitHub:** https://github.com/RenardNocturne/CodingHelp", `Demandée par ${message.author.username}`, "5D6C9D", undefined, "attachment://PP.jpg"));
    }
}
module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    const  mentionned = message.mentions.members.first(); // On prends le premier mentionné
    let reason = args.slice(1).join(' '); // Pour la raison on enlève la mention

    let reasonText = ""; //On définit reasonText comme ça sa portée est élargie

    if (reason !== "") {
        reasonText = `\n \n *__Raison:__* \n > ${reason} \n` //Si reasonText n'est pas empty, on en fait un text comme ça on évite les citiations vides
    }

    console.log(reason)

    if (mentionned === undefined) return message.channel.send(embedError(undefined, `Le membre m'est inconnu !`)); //Si la personne mentionné n'xiste pas on return

    if (mentionned.bannable) { // Si on peut ban on ban

        message.guild.channels.cache.get('829037449903734804').send(embedMaker("Membre banni !", `**${mentionned} a été banni par <!@${message.author.id}> !** ${reasonText}`));
        message.channel.send(embedMaker("Membre banni !", `**${mentionned} a été banni !** \n \n *__Modérateur:__* \n > <@!${message.author.id}> ${reasonText}`))
        mentionned.ban({reason: reason});

    } else {
        message.channel.send(embedError(undefined, `Il m'est impossible de bannir ${mentionned}, sans doute que mon rôle le plus haut est inférieur à son rôle le plus élevé !` )) // Sinon on en informe l'utilisateur
    }
}

module.exports.help = {
    name: "ban",
    category: 'moderation',
    description: "Vous permet de bannir un forcené.",
    args: 1,
    usage: "[@malfrat] <raison>",
    cooldown: 0,
    aliases: [],
    userPerms: ["BAN_MEMBERS"], //Besoin des perms de ban pour effectuer la cmd
    botPerms: ["BAN_MEMBERS"],
    deletecmd: true,
}
module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    console.log(args)
    switch (args[0]) {
        case '1' : 
            message.channel.send(embedMaker(`Article ${args[0]}`, "> :x: **1.** **Ne pas spammer** (Envoyer des messages en répétition) dans les salons textuels."));
        break;

        case '2': 
            message.channel.send(embedMaker(`Article ${args[0]}`, ":x: **2.** La **pub** sur toute sa forme est **interdite** ailleurs que dans #📧》partenariats, que ce soit en MP ou en public."))
        break;

        case '3':
            message.channel.send(embedMaker(`Article ${args[0]}`, ":x: **3.** Le **respect** entre chaque membre est **obligatoire** (toutes insultes sous toutes forme sera sanctionné)."))
        break;

        case '4':
            message.channel.send(embedMaker(`Article ${args[0]}`, ":x: **4.** **Ne pas mentionner les admins** ou membres du staff **sans raison valable** ou pour des problèmes qui ne nous concerne pas ou que nous ne pouvons résoudre."))
        break;

        case '5':
            message.channel.send(embedMaker(`Article ${args[0]}`,":x: **5.** Le **multi-compte** est **strictement interdit.**"))
        break;

        case '6':
            message.channel.send(embedMaker(`Article ${args[0]}`, ":x: **6.** Toutes réactions visant à écrire des **insultes** sera **sanctionné.**"))
        break;

        case '7':
            message.channel.send(embedMaker(`Article ${args[0]}`, ":x: **7.** Le contenu **pornographique** est **interdit.**"))
        break;

        case '8':
            message.channel.send(embedMaker(`Article ${args[0]}`, ":x: **8.** **L'usurpation d'identité** est formellement **interdite.**"))
        break;

        case '9':
            message.channel.send(embedMaker(`Article ${args[0]}`, ":warning: **9.** *Chaque salon a une utilité veuillez les respecter en lisant les messages épinglés.*"))
        break;

        case '10':
            message.channel.send(embedMaker(`Article ${args[0]}`, ":white_check_mark: **10.** **Bonne humeur et entraide sont les maîtres mots.**"))
        break;

        default:
            message.channel.send(embedMaker(`Voici les règles du serveur:`, "> :x: **1.** **Ne pas spammer** (Envoyer des messages en répétition) dans les salons textuels. \n > :x: **2.** La **pub** sur toute sa forme est **interdite** ailleurs que dans #📧》partenariats, que ce soit en MP ou en public. \n > :x: **3.** Le **respect** entre chaque membre est **obligatoire** (toutes insultes sous toutes forme sera sanctionné). \n > :x: **4.** **Ne pas mentionner les admins** ou membres du staff **sans raison valable** ou pour des problèmes qui ne nous concerne pas ou que nous ne pouvons résoudre. \n > :x: **5.** Le **multi-compte** est **strictement interdit.** \n > :x: **6.** Toutes réactions visant à écrire des **insultes** sera **sanctionné.** \n > :x: **7.** Le contenu **pornographique** est **interdit.** \n > :x: **8.** **L'usurpation d'identité** est formellement **interdite.** \n > \n > :warning: **9.** *Chaque salon a une utilité veuillez les respecter en lisant les messages épinglés.* \n > \n > :white_check_mark: **10.** **Bonne humeur et entraide sont les maîtres mots.**"));
        break;
    }
}

module.exports.help = {
    name: "rules",
    description: "Vous renvoies la liste des règles du serveur !",
    args: false,
    usage: '<numéro de la règle>',
    cooldown: 25,
    aliases: ["rule"],
    userPerms: [],
    botPerms: [],
    deletecmd: false,
}
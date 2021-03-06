module.exports.run = async (bot, message, args, embedMaker, prefix, embedError, convertTtD) => {

    const user = message.mentions.users.first() || message.author; //on prend le premier mentionné ou l'auteur du msg
    const invites = await message.guild.fetchInvites(); //On attend le fetch et on l'enregistre dans invites
    const userInvites = invites.filter(userInvite => userInvite.inviter.id === user.id); //On prend que les invites qui ont pour inviter le user
    
    let invitesCount = 0;
    let links = []; // On initialise un empty array 
    userInvites.forEach (invite => {    //Pour chaque invite on prend les infos qui nous interressent et on stock
        links.push(` \n *__Invitation au code ${invite.code}:__* \n > **${invite.uses} utilisation(s)** \n > Créée à ${convertTtD(invite.createdTimestamp)} \n`)
        invitesCount += 1;
        if (invite.maxAge === 0) {
            links.push('> Invitation infinie \n');
        } else {
            links.push(`> invitation temporaire \n`)
        }

        if (invite.maxUses !== 0) {
            links.push(`> Quota d'utilisation: ${invite.maxUses} \n`)
        }
    })

    const txt = `${links.join(' ')}` // Le texte c'est le tableau mais sans les virgules(oui c'est pas opti comme code et alors ??????????)
    

    if (userInvites.size === 0) {   //Si il a pas d'invite on return avec un embed error
        return message.channel.send(embedError(undefined, `${user} n'a aucune invitaton encore active, il m'est donc impossible d'en dresser les statistiques !`))
    } else return message.channel.send(embedMaker('Voici vos invitations en cours:', `${user}, vous avez ${invitesCount} invitations en cours:${txt}`))
}


module.exports.help = {
    name: "invites",
    category: 'informations',
    description: "Vous renvoie les statistiques de vos invitations !",
    args: false,
    usage: '',
    cooldown: 25,
    aliases: ["inv", 'invite'],
    userPerms: [],
    botPerms: [],
    deletecmd: true,
}
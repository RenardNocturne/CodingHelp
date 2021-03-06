const { MessageEmbed } = require("discord.js");

module.exports = async (bot, button) => {
    if (button.id === 'accepted') {
        if (button.clicker.member.roles.cache.has('825861210619641916')) {
            button.reply.send(`${button.clicker.user.username}, tu as déjà accepté les <#825765662923423754> !`, true);
        } else {
            await button.clicker.member.roles.add('825861210619641916');
            button.reply.send(`<a:Welcome1:871521999615299674><a:Welcome2:871520387379396629> Bienvenue sur CodingTime ${button.clicker.user.username} ! N'hésite pas à choisir tes rôles dans <#871449220584964127> ! <a:Welcome1:871521999615299674><a:Welcome2:871520387379396629>`, true);
        }
    }

    if (button.id === 'refused') {
        if (button.clicker.member.roles.cache.has('825861210619641916')) {
            button.clicker.member.roles.remove('825861210619641916');
            button.reply.send(`${button.clicker.user.username}, je t'ai retiré le rôle <@&825861210619641916>, clique encore une fois afin de quitter le serveur !`, true);
        } else {
            await button.clicker.member.kick()
            .then(() => {
                button.clicker.user.send('Voici ton lien https://discord.gg/YDa9BbNEtS si tu souhaites revenir sur le serveur CodingTime !').catch(err => console.log(`Impossible de DM ${button.clicker.user.username}`));
            })
            .catch(err => button.reply.send(`${button.clicker.user.username}, il m'est impossible de t'expulser, sans doute es-tu plus haut gradé que moi !`, true))
        }
    }

    if (button.id === 'closeTicket') {
        if (button.clicker.member.roles.cache.has('825764023504470047') || button.clicker.member.roles.cache.has('825764558093156372')) {
            ticket = button.guild.channels.cache.get(button.channel.id);

            function suppr () {
                ticket.delete().catch(errors => console.log(errors))
            }

            const embed = new MessageEmbed()
                .setTitle('Fermeture du ticket !')
                .setDescription('Ce ticket est **en cours de fermeture !**')
                .setColor('DE2916')
                .setFooter('Demandée par ' + button.clicker.user.username, button.clicker.user.displayAvatarURL());
            
            ticket.send(embed)
            setTimeout(suppr, 15000)
        } else {
            button.reply.send('Seul un <@&825764023504470047> ou un <@&825764558093156372> peut fermer le ticket, **merci d\'en mentionner un une fois le problème reglé !**', true)
        }
    }
}
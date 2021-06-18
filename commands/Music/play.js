const ytdl = require('ytdl-core-discord')

module.exports.run = async (bot, message, args, embedMaker, prefix, embedError) => {

    let queue = [];

    const validate = await ytdl.validateURL(args[0]);
    const filter = (reaction, user ) => reaction.emoji.name === '⏸' || '🔄' || '⏪' || '⏏' || '⏩' && user.id === message.author.id;
    async function runVideo (connection, video) {
        connection.play(await ytdl(video, { filter: 'audioonly' }), { type: 'opus' })
    }

    if (!message.member.voice.channel) return message.channel.send(embedError(undefined, 'Veuillez vous connectez à un salon vocal !'));
    if (!validate) return message.channel.send(embedError(undefined, 'URL invalide !'));

    if (!message.guild.me.voice.channel) {
        message.member.voice.channel.join().then((connection) => {
            runVideo(connection, args[0])
        })
    } else {
        return message.channel.send(embedError(undefined, '**Je suis déjà présent dans un salon vocal !**')) 
    }

    message.channel.send(embedMaker('En train de jouer:', `**Je suis actuellement en train de jouer [votre musique](${args[0]}) !** \n \n *__Utilisez:__ \n  > ⏪ afin de passer à la musique précédente. \n > ⏏ afin d'ajouter une musique à la file d'attente. \n > ⏸ afin de stopper la lecture. \n > 🔄 afin de lire en boucle. \n > ⏩ afin de skipper la musique actuelle et passer à la suivante.*`)).then((repliedMsg) => {
        let msg = repliedMsg;
        repliedMsg.react('⏪');
        repliedMsg.react('⏏');
        repliedMsg.react('⏸');
        repliedMsg.react('⏏');
        repliedMsg.react('⏩').then(() => {
            repliedMsg.awaitReactions(filter, {
                max: 1,
        }).then((react) => {
            switch (react.first().emoji.name) {
                // case '⏸':
                //     const userReactions = repliedMsg.reactions.cache.filter(reaction => reaction.users.cache.has(message.author.id));
                //     try {
                //         for (const reaction of userReactions.values()) {
                //             reaction.users.remove(message.author.id);
                //         }
                //     } catch (error) {
                //         console.error('Failed to remove reactions.');
                //     }
                //     message.channel.send(embedMaker('Musique interrompue:', '**La musique a bien été interrompue !**')).then((msg) => msg.delete({ timeout: 5000 }))
                // break;

                // case '⏪':
                //     const userReactions = repliedMsg.reactions.cache.filter(reaction => reaction.users.cache.has(message.author.id));
                //     try {
                //         for (const reaction of userReactions.values()) {
                //             reaction.users.remove(message.author.id);
                //         }
                //     } catch (error) {
                //         console.error('Failed to remove reactions.');
                //     }
                //     message.channel.send(embedMaker('Musique précédente:', `**Je joue désormais la [musique précédente sur la liste](${queue[]}) !**`)).then((msg) => msg.delete({ timeout: 5000 }))
                // break;

                // case '⏏':
                //     const userReactions = repliedMsg.reactions.cache.filter(reaction => reaction.users.cache.has(message.author.id));
                //     try {
                //         for (const reaction of userReactions.values()) {
                //             reaction.users.remove(message.author.id);
                //         }
                //     } catch (error) {
                //         console.error('Failed to remove reactions.');
                //     }
                //     message.channel.send(embedMaker('Musique interrompue:', '**La musique a bien été interrompue !**')).then((msg) => msg.delete({ timeout: 5000 }))
                // break;

                // case '⏩':
                //     const userReactions = repliedMsg.reactions.cache.filter(reaction => reaction.users.cache.has(message.author.id));
                //     try {
                //         for (const reaction of userReactions.values()) {
                //             reaction.users.remove(message.author.id);
                //         }
                //     } catch (error) {
                //         console.error('Failed to remove reactions.');
                //     }
                //     message.channel.send(embedMaker('Musique interrompue:', '**La musique a bien été interrompue !**')).then((msg) => msg.delete({ timeout: 5000 }))
                // break;
            }
        })
        })
    })
}

module.exports.help = {
    name: "play",
    category: 'music',
    description: "Vous joue de la musique",
    args: false,
    usage: '[URL de la musique/vidéo]',
    cooldown: 0,
    aliases: ["play"],
    userPerms: [],
    botPerms: [],
    deletecmd: true,
} 
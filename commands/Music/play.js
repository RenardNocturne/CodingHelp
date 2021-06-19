const ytdl = require('ytdl-core-discord')

module.exports.run = async (bot, message, args, embedMaker, prefix, embedError) => {

    let queue = [];

    const validate = await ytdl.validateURL(args[0]);
    const filter = (reaction, user ) => reaction.emoji.name === '▶' || '⏸' || '🔄' || '⏪' || '⏏' || '⏩' && user.id === message.author.id;

    if (!message.member.voice.channel) return message.channel.send(embedError(undefined, 'Veuillez vous connectez à un salon vocal !'));
    if (!validate) return message.channel.send(embedError(undefined, 'URL invalide !'));
    if (message.guild.me.voice.channel) {
        return message.channel.send(embedError(undefined, '**Je suis déjà présent dans un salon vocal !**')) 
    }

    let loop = false;
    
    async function runVideo(connection, video, msg) {
        let dispatcher = connection.play(await ytdl(video, { filter: 'audioonly' }), { type: 'opus' });
        if (loop === true) {
                dispatcher.on('finish', () => {
                runVideo(connection, video, msg);
            })
        }

        async function getReacts () {
            msg.awaitReactions(filter, { max: 1 }).then((react) => {
                switch (react.first().emoji.name) {
                    case '➡':
                        message.channel.send(embedMaker('Répétition désactivée:', `**Je joue désormais votre [musique]() sans répétition !**`)).then((msg) => msg.delete({ timeout: 2500 }));
                        loop = false;
                        runVideo(connection, video, msg)
                        getReacts();
                    break;

                    case '⏪':
                        message.channel.send(embedMaker('Musique précédente:', `**Je joue désormais la [musique précédente sur la liste]() !**`)).then((msg) => msg.delete({ timeout: 2500 }))
                        getReacts();
                    break;

                    case '⏏':
                        message.channel.send(embedMaker('Musique interrompue:', '**La musique a bien été interrompue !**')).then((msg) => msg.delete({ timeout: 2500 }))
                        getReacts();
                    break;

                    case '⏸':
                        if (!dispatcher.paused) {
                            dispatcher.pause();
                            message.channel.send(embedMaker('Musique interrompue:', '**La musique a bien été interrompue !**')).then((msg) => msg.delete({ timeout: 2500 }))
                        } else {
                            message.channel.send(embedError(undefined, '**La musique est déjà en pause !**')).then((msg) => msg.delete({ timeout: 2500 }))
                        }
                        getReacts();
                    break;

                    case '▶':
                        if (dispatcher.paused) {
                            dispatcher.resume();
                            message.channel.send(embedMaker('Musique reprise:', '**La musique a bien été reprise !**')).then((msg) => msg.delete({ timeout: 2500 }))
                        } else {
                            message.channel.send(embedError(undefined, '**La musique est déjà en cours de lecture !**')).then((msg) => msg.delete({ timeout: 2500 }))
                        }
                        getReacts();
                    break;

                    case '🔄':
                        dispatcher.on('finish', () => {
                            loop = true
                            runVideo(connection, video, msg);
                        })
                        message.channel.send(embedMaker('Désormais en train de jouer en boucle:', '**Votre musique est désormais jouée en boucle !**')).then((msg) => {
                            msg.delete({timeout: 2500});
                        })
                        getReacts();
                    break;

                    case '⏩':
                        message.channel.send(embedMaker('Musique interrompue:', '**La musique a bien été interrompue !**')).then((msg) => msg.delete({ timeout: 2500 }))
                        getReacts();
                    break;

                    case '❌':
                        msg.delete().then(() => {
                            message.channel.send(embedError('Salon quitté:', `**J\'ai quitté le salon vocal <#${message.guild.me.voice.channelID}>**`)).then((msg) => msg.delete({timeout: 5000}))
                        }).then(() => {
                            message.guild.me.voice.channel.leave();
                        })
                    break;
                }
            })
        }

        msg.react('➡')
        msg.react('⏪');
        msg.react('⏏');
        msg.react('⏸');
        msg.react('▶');
        msg.react('🔄')
        msg.react('⏩')
        msg.react('❌').then(() => {
            getReacts();
        })
    }

    message.channel.send(embedMaker('En train de jouer:', `**Je suis actuellement en train de jouer [votre musique](${args[0]}) !** \n \n *__Utilisez:__ \n > ➡ afin de stopper la lecture en boucle. \n  > ⏪ afin de passer à la musique précédente. \n > ⏏ afin d'ajouter une musique à la file d'attente. \n > ⏸ afin de stopper la lecture. \n > ▶ afin de reprendre la lecture. \n > 🔄 afin de lire en boucle. \n > ⏩ afin de skipper la musique actuelle et passer à la suivante. \n > ❌ afin de me déconnecter.*`)).then((repliedMsg) => {
        let msg = repliedMsg;
        
        
        message.member.voice.channel.join().then((connection) => {
            runVideo(connection, args[0], msg)
        })
    })
}

module.exports.help = {
    name: "play",
    category: 'music',
    description: "Vous joue de la musique",
    args: false,
    usage: '[Lien youtube de la musique/vidéo]',
    cooldown: 0,
    aliases: ["play"],
    userPerms: [],
    botPerms: [],
    deletecmd: true,
} 
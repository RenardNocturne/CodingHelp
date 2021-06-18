const ytdl = require('ytdl-core')

module.exports.run = async (bot, message, args, embedMaker, prefix, embedError) => {
    
    const validate = await ytdl.validateURL(args[0]);
    const filter = (reaction, user) => reaction.emoji.name === '⏸' && user.id === message.author.id;
    async function runVideo (message, connection, video) {
        const dispatcher = connection.play(await ytdl(video, {filter: 'audioonly'}), {
            type: 'opus'
        })
    }

    if (!message.member.voice.channel) return message.channel.send(embedError(undefined, 'Veuillez vous connectez à un salon vocal !'));
    if (!validate) return message.channel.send(embedError(undefined, 'URL invalide !'));

    if (!message.guild.me.voice.channel) {
        await message.member.voice.channel.join().then((connection) => {
            runVideo(message, connection, args[0]) 
        })
    } else {
        runVideo(message, message.member.voice.connection, args[0]) 
    }

    message.channel.send(embedMaker('En train de jouer en boucle:', `**Je suis actuellement en train de jouer en boucle [votre musique](${args[0]}) !** \n \n *Utilisez la réaction ⏸ afin de stopper la lecture.*`)).then((repliedMsg) => {
        let msg = repliedMsg;
        repliedMsg.react('⏸');
        repliedMsg.awaitReactions(filter, {
            max: 1,
        }).then(() => {
            msg.delete();
            message.member.voice.channel.leave();
            message.channel.send(embedMaker('Musique interrompue:', '**La musique a bien été interrompue !**')).then((msg) => msg.delete({ timeout: 5000 }))
        })
    })
}
module.exports.help = {
    name: "loop",
    category: 'music',
    description: "Vous joue de la musique",
    args: false,
    usage: '[URL de la musique/vidéo]',
    cooldown: 0,
    aliases: ["loop"],
    userPerms: [],
    botPerms: [],
    deletecmd: true,
} 
module.exports = {
    name: 'suggestions',
    description: 'Envoies ta suggestion !',

    execute(bot, message, args, embedMaker, prefix, embedError) {
        const channel = message.guild.channels.cache.find(c => c.id === '848156324248420402');
        if(!channel) return message.channel.send(embedError('Le salon de suggestions n\'a pas été trouvé !'));
        if(args[0] === undefined) return message.channel.send(embedError('Aucune suggestion apportée !'))

        let messageArgs = args.join(' ');
        console.log(messageArgs);

        channel.send(embedMaker('Nouvelle suggestion en vue !', `${messageArgs}`, `En provenance de ${message.author.username}`)).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        })
    }
}
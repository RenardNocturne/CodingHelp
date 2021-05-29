module.exports = {
    name: 'suggestions',
    description: 'Envoies ta suggestion !',

    execute(message, args, embedMaker) {
        const channel = message.guild.channels.cache.find(c => c.id === 848156324248420402);
        if(!channel) return message.channel.send(embedMaker('Une erreur est survenue !', 'Le salon de suggestions n\'a pas été trouvé !', `Demandée par ${message.author.username}`, 'DE2916'));
        if(args[0] === undefined) return message.channel.send(embedMaker('Une erreur est survenue !', 'Aucune suggestion apportée !', `Demandée par ${message.author.username}`, 'DE2916I'))

        console.log(args);
        let messageArgs = args.join(' ');
    
        channel.send(embedMaker('Nouvelle suggestion en vue !', `${messageArgs}`)).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        })
    }
}
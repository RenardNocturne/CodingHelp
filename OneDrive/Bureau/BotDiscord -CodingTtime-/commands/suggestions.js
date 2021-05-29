

module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestions'],
    permissions: [],
    description: 'créé ta suggestion',
    execute(message, args, cmd, client, discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send('le channel **suggestions** n égiste pas');

        let messageArgs = args.join(' ');
        //const embed = new discord.MessageEmbed()
        //.setColor('FADF2E')
        //.setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        //.setDescription(messageArgs);

        channel.send().then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}
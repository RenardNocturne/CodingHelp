const { prefix, TOKEN } = require('../../Ignore/config.js');
const { convertTtD, upperCaseFirstLettter } = require('../../Utils/loader')
const Discord = require('discord.js');

module.exports = async (bot, messageReaction, user) => {
    const reacts = await messageReaction.message.reactions.cache;
    const SBChannel = bot.channels.cache.get('843431120292937749');
    const react = await reacts.get('🌟'); // Oui j'ai mis des awaits partout mais bon hein
    try {

        if (react.count >= 5) {
            const embed = new Discord.MessageEmbed()
                .setTitle('Alerte Starboard !')
                .setDescription(`*__Message:__* \n > ${react.message.content.replace('\n', '\n > ')} \n\n En provenance du salon <#${react.message.channel.id}> de la part de <@!${react.message.author.id}> ! \n \n [Jump to the message !](${react.message.url})`)
                .setFooter(`Bien joué ${react.message.author.username} !`, react.message.author.avatarURL())
                .setColor('5D6C9D')
                .setTimestamp();
    
            SBChannel.send(embed)
        }

    } catch(error) {
    
    }
}
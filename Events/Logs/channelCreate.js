const { MessageEmbed } = require("discord.js");

module.exports = async (bot, channel) => {
    
    const logsChannel = bot.channels.cache.get('829037449903734804');
    const AuditLogs = await channel.guild.fetchAuditLogs( { limit: 1, type: 'CHANNEL_CREATE' } );
    const latestChannelCreated = AuditLogs.entries.first();
    const { executor, target } = latestChannelCreated;
    console.log(latestChannelCreated);

    const embed = new MessageEmbed()
        .setTitle(`${executor.username} vient de créer un salon !`)
        .setColor("5D6C9D")
        .setDescription(`*__Créateur du salon:__* \n > <@!${executor.id}> \n \n __*Salon créé:*__ \n > <#${target.id}> \n > ID: ${target.id}`)
        .setTimestamp()
        .setFooter(`Logs du serveur ${target.guild.name}`, executor.displayAvatarURL());

    return logsChannel.send(embed)
}
const { MessageEmbed } = require("discord.js");

module.exports = async (bot, channel) => {

    if (channel.type === 'dm') return;
    const logsChannel = bot.channels.cache.get('829037449903734804'); // On cible le channel de logs
    const AuditLogs = await channel.guild.fetchAuditLogs( { limit: 1, type: 'CHANNEL_CREATE' } ); //On fetch les logs et on écoute ceux de type CHANNEL_CREATE, le bot est trigger à 1
    const latestChannelCreated = AuditLogs.entries.first(); // On prend la première entrée
    const { executor, target } = latestChannelCreated; // On va chercher executor et target dans latestChannelCreated
    console.log(latestChannelCreated);

    const embed = new MessageEmbed() // On fait l'embed
        .setTitle(`${executor.username} vient de créer un salon !`)
        .setColor("5D6C9D")
        .setDescription(`*__Créateur du salon:__* \n > <@!${executor.id}> \n \n __*Salon créé:*__ \n > <#${target.id}> \n > ID: ${target.id}`)
        .setTimestamp()
        .setFooter(`Logs du serveur ${target.guild.name}`, executor.displayAvatarURL());

    return logsChannel.send(embed)// et on l'envoie
}
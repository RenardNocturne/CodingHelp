const { MessageEmbed } = require("discord.js");

module.exports = (bot, message) => {
    if(message.author.bot) return;

    const embed = new MessageEmbed()
        .setTitle("Une erreur est survenue !")
        .setDescription(`Si vous souhaitez effectuer une de mes commandes, utilisez-la dans un salon de serveur Discord ! **Je suis indisponible via messages privés.**`)
        .setColor("DE2916")
        .setFooter(`Demandée par ${message.author.username}`, `${message.author.avatarURL()}`)
        .setTimestamp();
    message.author.send(embed).catch(errors => console.log(errors)) 
}
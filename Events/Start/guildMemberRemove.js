const { MessageEmbed, MessageAttachment } = require("discord.js");
const img = new MessageAttachment('./img/leave.jpg');

module.exports = (bot, member) => {
    
    console.log(member.joinedAt, member.joinedTimestamp)
    console.log("Un utilisateur nous a quitté !");
    const leaveEmbed = new MessageEmbed()
        .setTitle(`Ho ! ${member.displayName} nous a quitté !`)
        .setColor("DE2916")
        .setDescription(`Nous sommes désormais ${member.guild.memberCount} sur ${member.guild.name} suite à la tragique disparition de ${member.displayName} ! :sob:`)
        .attachFiles(img)
        .setImage('attachment://leave.jpg')
        .setFooter('Espérons que ce séjour parmis nous t\'auras plu !', member.user.displayAvatarURL());

    member.guild.channels.cache.get('825777621224128524').send(leaveEmbed);
}
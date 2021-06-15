const { MessageEmbed, MessageAttachment } = require("discord.js");
const img = new MessageAttachment('./img/leave.jpg');

module.exports = (bot, member,) => {
    
    
    function convertTtD (timestamp) {
        let date = new Date(timestamp);
    
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" +date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }
    console.log("Un utilisateur nous a quitté !");
    const leaveEmbed = new MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL())
        .setTitle(`Ho ! ${member.displayName} nous a quitté !`)
        .setColor("DE2916")
        .setDescription(`Nous sommes désormais ${member.guild.memberCount} sur ${member.guild.name} suite à la tragique disparition de ${member.displayName} ! :sob:`)
        .attachFiles(img)
        .setImage('attachment://leave.jpg')
        .setFooter(`Avait rejoint à ${convertTtD(member.joinedTimestamp)}`, member.user.displayAvatarURL());

    member.guild.channels.cache.get('825777621224128524').send(leaveEmbed);
}
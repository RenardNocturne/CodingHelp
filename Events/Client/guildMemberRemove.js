const { MessageEmbed, MessageAttachment } = require("discord.js");
const img = new MessageAttachment('./img/leave.jpg');

module.exports = (bot, member,) => {
    if (member.guild.id !== '825760704241991752') return
    
    function convertTtD (timestamp) {
        let date = new Date(timestamp);
        let minutes = "0" + date.getMinutes();
        return date.getHours() + ":" + minutes.substr(-2) + " le " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
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
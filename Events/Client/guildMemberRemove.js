const { MessageEmbed, MessageAttachment } = require("discord.js");
const img = new MessageAttachment('./img/leave.jpg');

module.exports = (bot, member,) => {
    
    
    function convertTtD (timestamp) {
        let date = new Date(timestamp);
        let minutes = "0" + date.getMinutes();
        return date.getHours() + ":" + minutes.substr(-2) + " le " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    }

    const personalizedLeaveEmbed = new MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL())
        .setTitle(`Ho ! ${member.displayName} nous a quitté !`)
        .setColor("5D6C9D")
        .setDescription(`${bdd['leaveMessage']}`)
        .attachFiles(img)
        .setImage('attachment://wlc.png')
        .setFooter(`Avait rejoint à ${convertTtD(member.joinedTimestamp)}`, member.user.displayAvatarURL());

    console.log("Un utilisateur nous a quitté !");
    const leaveEmbed = new MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL())
        .setTitle(`Ho ! ${member.displayName} nous a quitté !`)
        .setColor("DE2916")
        .setDescription(`Nous sommes désormais ${member.guild.memberCount} sur ${member.guild.name} suite à la tragique disparition de ${member.displayName} ! :sob:`)
        .attachFiles(img)
        .setImage('attachment://leave.jpg')
        .setFooter(`Avait rejoint à ${convertTtD(member.joinedTimestamp)}`, member.user.displayAvatarURL());

    if (bdd["welcomeMessage"]) {
        member.guild.channels.cache.get('825777621224128524').send(personalizedLeaveEmbed);
    } else {
        member.guild.channels.cache.get('825777621224128524').send(leaveEmbed);
    }
}
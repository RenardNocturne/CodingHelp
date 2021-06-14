const { MessageEmbed, MessageAttachment } = require("discord.js");
const img = new MessageAttachment('./img/wlc.png');

module.exports = (bot, member) => {
    
    console.log("Nouvel utilisateur !");
    const welEmbed = new MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL())
        .setTitle(`Ho ! ${member.displayName} nous a rejoint !`)
        .setColor("5D6C9D")
        .setDescription(`Nous sommes désormais ${member.guild.memberCount} sur ${member.guild.name} et ce grâce à toi ! :tada:`)
        .attachFiles(img)
        .setImage('attachment://wlc.png')
        .setFooter('Espérons que tu te plaises parmis nous !', member.user.displayAvatarURL());

    const ruleEmbed = new MessageEmbed()
        .setTitle(`${member.displayName} bienvenue !`)
        .setDescription(`Ici tu pourras prendre connaissance des règles ! **Acceptes-les afin de jouir de l'intégralité du serveur via la réaction :white_check_mark:**`)
        .setColor("5D6C9D")
        .setFooter(`Règles du serveur ${member.guild.name}`, member.guild.iconURL());

    member.guild.channels.cache.get('825776631599333396').send(welEmbed);
    member.guild.channels.cache.get('825765662923423754').send(`<@!${member.id}>`, ruleEmbed).then(msg => msg.delete({timeout: 30000}));
}
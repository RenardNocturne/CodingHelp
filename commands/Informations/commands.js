const { MessageEmbed } = require("discord.js");
const { readdirSync } = require('fs');

module.exports.run = async (bot, message, args, embedMaker, prefix, embedError, convertTtD, upperCaseFirstLettter) => {

    const categoryList = readdirSync('./Commands');
    const command = bot.commands.get(args[0]) || bot.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));

    if (args.lenght === 0 ||command === undefined) {
        const embed = new MessageEmbed()
            .setTitle(`Voici la liste des commandes !`)
            .setColor("5D6C9D")
            .setDescription(`**Pour plus d'informations sur une commandes, tapez** \`${prefix}help <Nom d'une commande>\` !`)
            .setFooter(`Demandée par ${message.author.username}`, message.author.displayAvatarURL())
            .setTimestamp()

            categoryList.forEach(category => {
                let txt = '';
                catHelp = bot.commands.filter(cat => cat.help.category === category.toLowerCase());
                catHelp.forEach(cmd => {
                txt += `> \`${prefix}${cmd.help.name}\` ${cmd.help.description} \n`
                })

                embed.addField(
                    `${category}`, `${txt}`
                )
            });

        return message.channel.send(embed)
    } else {
        
        let txt = '';
        txt += `***__Nom de la commande:__*** \n > ${command.help.name} \n \n `;

        if (command.help.aliases.length !== 0) {
            txt += `***__Aliases:__*** \n > ${command.help.aliases.join(' \n > ')} \n \n`
            console.log(command.help.aliases.length)
        }

        txt += `***__Description:__*** \n > ${command.help.description} \n \n ***__Catégorie:__*** \n > ${upperCaseFirstLettter(command.help.category)} \n \n ***__Utilisation:__*** \n > \`${prefix}${command.help.name} ${command.help.usage}\` \n \n ***__Cooldown:__*** \n > ${command.help.cooldown} secondes \n \n`

        if (command.help.userPerms.length !== 0) {
            txt += `***__Permissions utilisateur requises:__*** \n > ${command.help.userPerms.join(' \n > ')} \n \n`
        }

        if (command.help.botPerms.length !== 0) {
            txt += `***__Permissions du bot requises:__*** \n > ${command.help.botPerms.join(' \n > ')} \n \n`
        }

        const embed = new MessageEmbed()
            .setTitle(`Voici les informations pour la commande ${command.help.name} !`)
            .setColor("5D6C9D")
            .setDescription(txt)
            .setTimestamp()
            .setFooter(`Demandée par ${message.author.username}`, message.author.displayAvatarURL());
        message.channel.send(embed)
    }
}


module.exports.help = {
    name: "commands",
    category: 'informations',
    description: "Vous renvoie la liste des commandes et leurs descriptions !",
    args: false,
    usage: '<Nom d\'une commande>',
    cooldown: 15,
    aliases: ["cmd", 'command'],
    userPerms: [],
    botPerms: [],
    deletecmd: true,
} 
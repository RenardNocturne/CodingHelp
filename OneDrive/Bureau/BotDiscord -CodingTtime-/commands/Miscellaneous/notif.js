module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {
    
        
        let mention = message.mentions.members.first();
        if(mention == undefined){
        message.reply(`OUPS ! il faut mentionner un membre`)
        }else{
        mention.roles.add('848543843133685790')
        message.channel.send("c'est bon tu as ton rôle ^^")
        }
        
        

}




module.exports.help = {
    name: 'notif',
    description: 'ajoute un rôle',
    args: true,
    usage: "[Pseudo]",
    cooldown: 25,
    aliases: ['notife', 'notiff'],
    userPerms: ["ADMINISTRATOR"],
    botPerms: ["SEND_MESSAGES", "ADMINISTRATOR"]
  }

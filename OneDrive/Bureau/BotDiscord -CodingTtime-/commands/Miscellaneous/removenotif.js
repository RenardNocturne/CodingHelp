module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    let mention = message.mentions.members.first();
    if(mention == undefined){
    message.reply(`OUPS ! il faut mentionner un membre`)
    }
    member.removeRole('848543843133685790').catch(console.error);
    }









module.exports.help = {
    name: 'removenotif',
    description: 'enlève les notifs',
    args: true,
    usage: "[Pseudo]",
    cooldown: 25,
    aliases: ['removenotife'],
    userPerms: ["ADMINISTRATOR"],
    botPerms: ["SEND_MESSAGES", "ADMINISTRATOR"]
  }

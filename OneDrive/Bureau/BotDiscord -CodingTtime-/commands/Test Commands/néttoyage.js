module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.reply("Ce n'est pas un nombre valide !");
    }
    else if (amount <= 1 || amount > 100) {
      return message.reply("Tu dois saisir un nombre compris entre 1 et 99 !");
    }

    message.channel.bulkDelete(amount)
      .then(messages => console.log(`${messages.size - 1} messages supprimés.`))
  }; 

  module.exports.help = {
    name: 'nettoyage',
    description: 'Delete messages.',  
    args: true,
    usage: "[nombre entre 1 et 10]",
    cooldown: undefined,
    aliases: ['nettoiage', 'néttoyage', 'netoyage', 'nétoyage' ],
    userPerms: ["ADMINISTRATOR"],
    botPerms: ["SEND_MESSAGES", "ADMINISTRATOR"]

  } 

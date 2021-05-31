module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {


    message.channel.send('Pong.');
  
}; 

module.exports.help = {
  name: 'ping',
  description: 'Test Command.',
  args: false,
  cooldown: 25,
  aliases: ['pinge'],
  userPerms: ["ADMINISTRATOR"],
  botPerms: ["SEND_MESSAGES", "ADMINISTRATOR"]
}
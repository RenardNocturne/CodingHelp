module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {


    message.channel.send('Pong.');
  
}; 

module.exports.help = {
  name: 'ping',
  description: 'Test Command.'
}
module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    bot.on("message", message => {
 
        
        if (message.channel.type !== "text") return;
     
        
        const members = message.channel.guild.members.cache;
     
        members.forEach(member => {
           
            if (member.user.bot) return;
     
           
            member.send("c nat tkt je fais des truc sur le bot");
        });
    });




}











module.exports.help = {
    name:"report",
    description:"report un bug/dysfonctionement"




}
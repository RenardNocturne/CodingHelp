module.exports.run = (bot, message, args, embedMaker, prefix, embedError) => {

    message.channel.send("Hey BG !");
}

module.exports.help = {
    name: "bonjour",
    description: "N'oublions pas les bonnes manières !",
    args: false,
    cooldown: 25,
}
module.exports = (bot) => {
    console.log("Bot successfully logged in !")

    bot.user.setPresence({ activity: { name: `son propre développement.`, type: 'WATCHING' }, status: 'online'})
      .catch(console.error);
}
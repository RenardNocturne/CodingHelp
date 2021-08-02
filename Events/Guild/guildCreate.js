module.exports = async (bot, guild) => {
    const newGuild = {
        guildID: guild.id,
        guildName: guild.name,
    };

    await bot.createGuild(newGuild);
}
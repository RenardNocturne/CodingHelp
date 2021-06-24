const mongoose = require("mongoose");
const guild = require("../Models/guild");
const { Guild } = require('../Models/main')

module.exports = bot => {

    bot.createGuild = async guild => {
        const merged = Object.assign({_id: mongoose.Types.ObjectId()}, guild);
        const createGuild = await new Guild(merged);
        createGuild.save().then(g => console.log(`Nouveau serveur en vue ! ${g.guildName} Nous a rejoint !`))
    };

    bot.getGuild = async guild => {
        const data = await Guild.findOne({ guildID: guild.id });
        if (data) return data;
        return bot.config.DEFAULTSETTINGS;
    };

    bot.updateGuild = async (guild, settings) => {
        let data = await bot.getGuild(guild);
        if (typeof data !== 'object') data = {};
        for (const key in settings) {
            if (data[key] !== settings[key]) data[key] = settings[key];
        }
        return data.updateOne(settings);
    }
}
const mongoose = require('mongoose');
const { DEFAULTSETTINGS: defaults } = require('../Ignore/config');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,

    prefix: {
        'type': String,
        'default': defaults.prefix
    },
    logChannel: {
        'type': String,
        'default': defaults.logChannel
    },
    welcomeMessage: {
        'type': String,
        'default': defaults.welcomeMessage
    },
    leaveMessage: {
        'type': String,
        'default': defaults.leaveMessage
    },
});

module.exports = mongoose.model('Guild', guildSchema);
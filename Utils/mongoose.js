const mongoose = require('mongoose');
const { DBCONNECTION } = require('../Ignore/config');

module.exports = {
    init: () => {
        const mongOption = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            autoIndex: false, // Don't build indexes
            poolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        }

        mongoose.connect(DBCONNECTION, mongOption);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('MongoBD est connecté !');
        })
    }
}
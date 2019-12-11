const mongoose = require('mongoose')
const DB_URI = 'mongodb+srv://danielcr100:9Uj7HMKBfNPNTjt9@clustervinis-6pbxe.mongodb.net/test?retryWrites=true&w=majority' //modificar con atlas

// mongoose.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connect(DB_URI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('Connected to a MongoDB instance');

})
mongoose.connection.once('error', error => {
    console.error(error);

})

module.exports = mongoose
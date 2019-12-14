const mongoose = require('mongoose');
const { mongodb } = require('./keys.js');

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Se conecto a la base de datos uwu'))
    .catch(err => console.error(err));

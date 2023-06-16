let mongoose = require('mongoose');

//create a model class
let gameModel = mongoose.Schema({
    name: String,
    developer: String,
    released: String,
    description: String,
    price: Number
},
{
    collection: 'games'
});

module.exports = mongoose.model('Game', gameModel);
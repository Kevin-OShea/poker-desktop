const mongoose = require('mongoose');

const test = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    highScore: Number,
    name: String
});

module.exports = mongoose.model('test', test);
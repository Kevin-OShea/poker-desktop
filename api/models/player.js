const mongoose = require('mongoose');

const player = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hand: {
        type: String,
        required: true,
        default: ''
    },
    funds: {
        type: Number,
        required: true,
        default: 500
    }
    // [ha][h2][h3]
});

module.exports = mongoose.model('player', player);
const mongoose = require('mongoose');

const table = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    hand_cards: {
        type: [[String]],
        default: [["123456789XJQK"],["123456789XJQK"],["123456789XJQK"],["123456789XJQK"]]
    },
    hand_suite: {
        type: [[String]],
        default: [["s"],["h"],["d"],["c"]]
    },
    name: {
        type: String,
        required: true
    },
    room_id: {
        type: String,
        required: true
    },
    players: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    // [123456789xjqk][123456789xjqk][123456789xjqk][123456789xjqk]
    // [h][d][s][c]
    // [ha][h2][h3]

});

module.exports = mongoose.model('table', table);
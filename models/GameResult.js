const mongoose = require("mongoose");


const gameResultSchema = new mongoose.Schema({
    user_poke_name : { type: String, min: 2, max: 50, required: true },
    random_poke_name : { type: String, min: 2, max: 50, required: true },
    winner_poke_name : { type: String, min: 2, max: 50, required: true},
});

const GameResult = mongoose.model('GameResult', gameResultSchema);

module.exports = GameResult;

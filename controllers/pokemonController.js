const GameResult = require('../models/GameResult')

exports.getResult = async (req, res, next) =>{
    try{
        const getResults = await GameResult.find({});
        res.json(getResults)
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

exports.createResult = async(req, res, next) =>{
    const {user_poke_name, random_poke_name, winner_poke_name } = req.body;
    console.log( req.body);
    try{
        const createResult = await GameResult.create({ user_poke_name, random_poke_name, winner_poke_name});
        res.json(createResult)
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

// exports.module = {
//     getResult,
//     createResult
// }



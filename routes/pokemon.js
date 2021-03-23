const express = require('express');
const router = express.Router();
const {getResult, createResult} = require('../controllers/pokemonController');

// get route
router.get('/leaderboard', getResult)
router.post('/save', createResult)


module.exports = router;

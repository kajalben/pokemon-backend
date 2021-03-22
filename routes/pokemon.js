const express = require('express');
const router = express.Router();
const {getResult, createResult} = require('../controllers/pokemonController');

// get route
router.get('/', getResult)

router.post('/', createResult)


module.exports = router;

const express = require('express');
const jsonData = require('../file.json')
const router = express.Router();

// get route
router.get('/', (req, res)=> {
  res.json(jsonData)
})

router.get('/:id', (req, res)=> {
  const {id} = req.params
    const getOnePokemon = jsonData.find(pokemon => pokemon.id === Number(id))
    if(!getOnePokemon) return res.status(404).send("Invalid entry")
   res.json(getOnePokemon)
    // res.json(jsonData)
   })


module.exports = router;

const router = require('express').Router();

const charSort = require('../helpers/CharSort');

router.post('/reverse', (req, res) => {
  let word = req.body.word;
  let sorted = charSort(word);
  res.send(200, sorted); 
});

module.exports = router;

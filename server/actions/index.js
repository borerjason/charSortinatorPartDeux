const charSort = require('../helpers/CharSort');

module.exports = {
  post: (req, res) => {
    let word = req.body.word;
    let sorted = charSort(word);
    res.send(200, sorted);
  },
};

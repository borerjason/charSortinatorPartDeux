const charSort = require('../helpers/CharSort');

module.exports = {
  post: (req, res) => {
    const { word } = req.body;
    const sorted = charSort(word);
    res.status(200).send({ sorted });
  },
};

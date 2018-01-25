const router = require('express').Router();
const reverse = require('../actions')

router.post('/reverse', reverse.post);

module.exports = router;

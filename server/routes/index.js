const router = require('express').Router();
const sort = require('../actions');

router.post('/sort', sort.post);

module.exports = router;

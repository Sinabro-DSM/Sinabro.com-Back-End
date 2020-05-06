const router = require('express').Router();
const admin = require('./admin');
const post = require('./post');

router.use('/admin', admin);
router.use('/data', post);

module.exports = router;
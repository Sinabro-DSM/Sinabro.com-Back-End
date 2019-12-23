const router = require('express').Router();
const controller = require('./admin.controller');

router.post('/', controller.login);

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('./post.controller');
const authMiddleware = require('../../middlewares/auth');
const multer = require('multer');
const path = require('path');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'uploads/');
        },
        filename(req, file, cb) {
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    })
});

router.post('/', authMiddleware, upload.single('file'), controller.writeOne);
router.get('/showone/:_id', controller.showOne);
router.get('/:category', controller.showPost);

module.exports = router;
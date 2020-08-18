
var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/albums');

router.post('/albums/:id/reviews', reviewsCtrl.create);

module.exports = router;
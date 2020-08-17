var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trouble Will Find Me' });
});

router.get('/albums', function (req, res, next) {
  res.render('album', { title: 'Trouble Will Find Me' });
});

module.exports = router;

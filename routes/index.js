var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/real-estate', function(req, res, next) {
  res.render('real-estate', { title: 'Real Estate' });
});


module.exports = router;

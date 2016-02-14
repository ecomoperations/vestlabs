var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/real-estate', function(req, res, next) {
  res.render('real-estate', { title: 'Real Estate' });
});

router.get('/login', function(req, res, next) {
	res.render('login', {title: "Login"})
});




module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { hello: 'Express',time:'1234' });
});

router.get('/hello', function(req, res, next) {
  res.send('The time is '+new Date().toDateString());
});

router.get('/hello/:username', function(req, res, next) {
  res.send('The time is '+req.params.username);
});


module.exports = router;

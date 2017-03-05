var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 增加用户
router.get('/addUser', function(req, res, next) {
  userDao.add(req, res, next);
});

module.exports = router;

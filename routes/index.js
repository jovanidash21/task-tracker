var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', {
    title: 'Login | Todo List'
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  res.json({code:20000});
});

module.exports = router;

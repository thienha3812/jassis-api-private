var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function (req, res, next) {
  res.json({
    "code": 20000,
    "data": {
      "token": "admin-token"
    }
  });
});
router.get('/info', function (req, res, next) {
  res.json({
    'admin-token': {
      roles: ['admin'],
      introduction: 'I am a super administrator',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin'
    }
  });
});
module.exports = router;

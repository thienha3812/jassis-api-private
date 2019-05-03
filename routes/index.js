const sequelize = require('../model/config');
const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.get('/sentence/query', function (req, res, next) {
  sequelize.query('SP_GetResponse :sentence,:user_id', {
    replacements: {
      sentence: req.body.sentence,
      user_id: req.body.user_id
    },
    type: Sequelize.QueryTypes.SELECT
  }).then((result) => {
    res.send(JSON.parse(result[0]["response"])[0]);
  }).catch(err => {
    res.send("[ { response: '-1' } ]");
  })
});
router.get('/varible/getall', function (req, res, next) {
  sequelize.query('SP_GetAllVarriables',{
    type : Sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json(result);
  });
})
module.exports = router;

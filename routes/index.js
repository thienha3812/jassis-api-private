const sequelize = require('../model/config');
const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendStatus(500);
});
router.post('/sentence/query', function (req, res, next) {
  sequelize.query('SP_GetResponse :sentence,:user_id', {
    replacements: {
      sentence: req.body.sentence,
      user_id: req.body.user_id
    },
    type: Sequelize.QueryTypes.SELECT
  }).then((result) => {
    res.send(JSON.parse(result[0]["response"])[0]);
  }).catch(err => {
    res.send('-1');
  })
});
router.post('/variable/getall', function (req, res, next) {
  sequelize.query('SP_GetAllVarriables',{
    type : Sequelize.QueryTypes.SELECT
  }).then(result => {
    res.send(JSON.parse(result[0]["response"]));
  }).catch(err=>{
    res.send("-1");
  })
})
module.exports = router;

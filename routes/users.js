const sequelize = require('../model/config');
const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function (req, res, next) {
    sequelize.query('CheckAccount :username, :userpass',{
      replacements :{
        username : req.body.username,
        userpass : req.body.password
      },
      type : Sequelize.QueryTypes.SELECT
    }).then((result)=>{
      if(result.length ===0){
        res.sendStatus(404)
      }else{
        res.sendStatus(200)
      }
    })
});

module.exports = router;

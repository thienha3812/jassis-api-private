const sequelize = require('../model/config');
const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();


router.post('/getallbyphraseid',function(req,res,next){
    console.log(req.body)
    sequelize.query('SP_GetResponseByPhraseID :intentid',{
        replacements : {
            intentid : req.body.id
        },
        type : Sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.json(response);
    }).catch(err=>{
        res.send(err)
    })
});

module.exports = router
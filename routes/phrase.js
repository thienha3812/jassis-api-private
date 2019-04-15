const sequelize = require('../model/config');
const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();


router.post('/getallbyintentid',function(req,res,next){
    sequelize.query('SP_GetPhraseByIntentID :intentid',{
        replacements : {
            intentid : req.body.id
        },
        type : Sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.json(response);
    });
});

module.exports = router
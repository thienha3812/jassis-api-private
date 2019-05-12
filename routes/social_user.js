const sequelize = require('../model/config');
const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();
var md5 = require('md5');
var jwt = require('jsonwebtoken');

router.post('/checkuser',function(req,res,next){
    sequelize.query('SP_CheckSocialAccount :usr_name, :md5_usr_pass',{
        replacements : {
            usr_name : req.body.usr_name,
            md5_usr_pass : req.body.usr_pass
        },
        type : Sequelize.QueryTypes.SELECT
    }).then(result=>{
        var token = jwt.sign({id:result[0]['id'],usr_name : result[0]['usr_name'],usr_pass:result[0]['usr_pass']},'neneIsLife',{expiresIn:"1h",algorithm : "HS512"})
        res.json({info_user:{id : result[0]['id'],display_name:result[0]['display_name'],avatar_src:result[0]['avatar_src']},token});
    }).catch(err=>{
        res.send("-1");
    });
});

module.exports = router
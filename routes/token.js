const sequelize = require('../model/config');
const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();
var jwt  = require("jsonwebtoken");



router.post('/checktoken',function(req,res,next){
    if(req.body.token){
        jwt.verify(req.body.token,'neneIsLife',{algorithms:'HS512'},function(err,decode){
            console.log(decode)
            if(err) res.sendStatus(500)
            else{
                res.status(200).send(decode);
            }
        })
    }else{
        res.sendStatus(500);
    }
});

module.exports = router 
const sequelize = require('../model/config');
const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
router.post('/getfriendfromuser', function (req, res, next) {
    jwt.verify(req.headers.authorization, 'neneIsLife', {
        algorithms: "HS512"
    }, function (err, decode) {
        if (err) {
            res.send("-2");
        } else {
            sequelize.query("SP_GetFriendsOfUser :usr_id",{
                replacements:{
                    usr_id : req.body.usr_id
                },
                type : Sequelize.QueryTypes.SELECT
            }).then(result=>{
                res.json(result);
            }).catch(err=>{
                res.send("-1");
            })
        }
    });

});
module.exports = router;
const sequelize = require('../model/config');
const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();


router.post('/getallbyphraseid',function(req,res,next){
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
router.post('/add',function(req,res,next){
    sequelize.query('SP_AddResponse :phrase_id, :response, :create_by',{
        replacements : {
            phrase_id : req.body.phrase.id,
            response : req.body.temp.response,
            create_by : 1
        },
        type : Sequelize.QueryTypes.SELECT
    }).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        res.send(err);
    });
});
router.post('/update', function(req,res,next){
    sequelize.query('SP_UpdateResponse :id, :response, :create_by',{
        replacements : {
            id : req.body.id,
            response : req.body.response,
            create_by : req.body.create_by
        },
        type : Sequelize.QueryTypes.SELECT
    }).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        res.send(err);
    });
});

router.post('/delete', function(req,res,next){
    sequelize.query('SP_DeleteResponse :id, :deletor',{
        replacements : {
            id :req.body.id,
            deletor : 1
        },
        type : Sequelize.QueryTypes.SELECT
    }).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        res.send(err);  
    })
});
module.exports = router
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
    }).catch(err=>{
        res.send(err)
    });
});
router.post('/add',function(req,res,next){
    sequelize.query('SP_AddPhrase :intentid, :phrase, :event_key, :event_object_json, :create_by',{
        replacements : {
            intentid : req.body.intent.id,
            phrase : req.body.temp.phrase,
            event_key : req.body.temp.event_key,
            event_object_json : req.body.temp.event_object_json,
            create_by : 1
        },
        type : Sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.json(response);
    }).catch(err=>{
        res.send(err)
    });
})
router.post('/update',function(req,res,next){
   sequelize.query('SP_UpdatePhrase :id, :phrase, :event_key, :event_json_object, :create_by',{
       replacements : {
           id : req.body.id,
           phrase : req.body.phrase,
           event_key : req.body.event_key,
           event_json_object  : req.body.event_json_object,
           create_by : 1
       }
   }).then(()=>{
       res.sendStatus(200);
   }).catch(err=>{
       res.send(err)
   })
});
router.post('/delete',function(req,res,next){
    sequelize.query('SP_DeletePhrase :id',{
        replacements : {
            id : req.body.id,
        },
        type : Sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.json(response);
    }).catch(err=>{
        res.send(err)
    });
});
module.exports = router
const sequelize = require('../model/config');
const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();

router.post('/add',function(req,res,next){
    sequelize.query('SP_AddSpeech :content, :speech_in_base64, :audio_encoding, :pitch, :speech_rate, :language_code, :voice_name, :create_by',{
        replacements:{
            content : req.body.content ,
            speech_in_base64 : req.body.speech_in_base64 ,
            audio_encoding : req.body.audio_encoding ,
            pitch : req.body.pitch ,
            speech_rate : req.body.speech_rate ,
            language_code : req.body.language_code ,
            voice_name : req.body.voice_name ,
            create_by : req.body.create_by 
        },
        type : Sequelize.QueryTypes.SELECT
    }).then(result=>{
        res.send(1);
    }).catch(err=>{
        res.send(-1);
    })
});
module.exports = router;
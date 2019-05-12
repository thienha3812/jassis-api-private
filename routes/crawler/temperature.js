var express = require('express');
var router = express.Router();
var request = require('request');
const cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;
var iconv = require('iconv-lite');

router.get('/get',function(req,res,next){
    request({ url: 'http://google.com/search?q=thoi tiet tuy hoa phu yen',encoding:null}, function(err,     response, body) {
    if (!err && response.statusCode == 200) {
            console.log(body.toString())
        }
    });
});
module.exports = router;

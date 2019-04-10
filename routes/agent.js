const sequelize = require('../model/config');
const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();


router.get('/add', async function (req, res, next) {
    sequelize.query('SP_AddAgent :agent_name, :tips, :descriptions, :examples, :create_by', {
        replacements: {
            agent_name: req.body.agent_name,
            tips: req.body.tips,
            descriptions: req.body.descriptions,
            examples: req.body.examples,
            create_by : req.body.create_by
        },
        type: Sequelize.QueryTypes.SELECT
    }).then(val => {
        res.sendStatus(200);        
    }).catch(err=>{
        res.send(err);
    });
});
router.get('/delete',async function(req,res,next){
    sequelize.query('SP_DeleteAgent :agent_id, :deletor', {
        replacements: {
            agent_id : req.body.agent_id,
            deletor : req.body.deletor
        },
        type: Sequelize.QueryTypes.SELECT
    }).then(val => {
        res.sendStatus(200);        
    }).catch(err=>{
        res.send(err);
    })
});
router.get('/getall',function(req,res,next){
    sequelize.query('SP_GetAllAgents',{ type: Sequelize.QueryTypes.SELECT }).then(val => {
        res.json(val);
    }).catch(err=>{
        res.send(err);
    })
});
router.get('/update',function(req,res,next){
    sequelize.query('SP_UpdateAgent :agent_id, :agent_name, :tips, :descriptions, :examples, :updator_id', {
        replacements: {
            agent_id : req.body.agent_id,
            agent_name: req.body.agent_name,
            tips: req.body.tips,
            descriptions: req.body.descriptions,
            examples: req.body.examples,
            updator_id : req.body.updator_id
        },
        type: Sequelize.QueryTypes.SELECT
    }).then(val => {
        res.sendStatus(200);        
    }).catch(err=>{
        res.send(err);
    });
})
module.exports = router;
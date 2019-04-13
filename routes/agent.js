const sequelize = require('../model/config');
const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();


router.post('/add', async function (req, res, next) {
    sequelize.query('SP_AddAgent :agent_name, :tips, :descriptions, :examples, :create_by', {
        replacements: {
            agent_name: req.body.agent_name,
            tips: req.body.tips,
            descriptions: req.body.descriptions,
            examples: req.body.examples,
            create_by : req.body.create_by
        },
        type: Sequelize.QueryTypes.SELECT
    }).then(() => {
        sequelize.query('SP_GetAgentByName :str',{
            replacements:{
                str : req.body.agent_name
            },
            type : Sequelize.QueryTypes.SELECT
        }).then(val=>{
            res.json(val)
        });
    }).catch(err=>{
        res.send(err);
    });
});
router.post('/delete',async function(req,res,next){
    sequelize.query('SP_DeleteAgent :agent_id, :deletor', {
        replacements: {
            agent_id : req.body.id,
            deletor : 1
        },
        type: Sequelize.QueryTypes.SELECT
    }).then(val => {
        res.send(val);
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
router.post('/update',function(req,res,next){
    sequelize.query('SP_UpdateAgent :agent_id, :agent_name, :tips, :descriptions, :examples, :updator_id', {
        replacements: {
            agent_id : req.body.id,
            agent_name: req.body.agent_name,
            tips: req.body.tips,
            descriptions: req.body.descriptions,
            examples: req.body.examples,
            updator_id : 1
        },
        type: Sequelize.QueryTypes.SELECT
    }).then(val => {
        res.sendStatus(200);        
    }).catch(err=>{
        res.send(err);
    });
})
module.exports = router;
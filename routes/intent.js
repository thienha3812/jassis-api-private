const sequelize = require('../model/config');
const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();

router.post('/add', function (req, res, next) {
    console.log(req.body)
    sequelize.query('SP_AddIntent :agent_id, :intent_name, :description, :create_by', {
        replacements: {
            agent_id: req.body.agent_id,
            intent_name: req.body.intent_name,
            description: req.body.description,
            create_by: req.body.create_by
        },
        type: Sequelize.QueryTypes.SELECT
    }).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        res.send(err);
    });
});
router.get('/delete', function (req, res, next) {
    sequelize.query('SP_DeleteIntent :id, :deleteor', {
        replacements: {
            id: req.body.id,
            deleteor: req.body.deleteor
        },
        type: Sequelize.QueryTypes.SELECT
    }).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        res.send(err);
    });
});
router.get('/update', function (req, res, next) {
    sequelize.query('SP_UpdateIntent :id, :intent_name, :description', {
        replacements: {
            id: req.body.id,
            intent_name: req.body.intent_name,
            description: req.body.description
        }
    }).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        res.send(err);
    })
});
router.get('/getall', function (req, res, next) {
    sequelize.query(' SP_GetAllIntents', {
        type: Sequelize.QueryTypes.SELECT
    }).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
});
router.post('/getwithagentid', function (req, res, next) {
    sequelize.query('SP_GetIntentByAgentId :agent_id', {
        replacements: {
            agent_id: req.body.id
        },
        type: Sequelize.QueryTypes.SELECT
    }).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
})
module.exports = router;
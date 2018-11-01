const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const sequelize = require('../models/sqlConnection')
const Client = require('../models/clientModel')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.get('', function(req, res){
    Client.findAll({}).then(data => {
        res.send(data)
    })
});

// router.post('', function(req, res){

// });

// router.delete('/:clientID', function(req,res){

// });

module.exports = router
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const sequelize = require('../models/sqlConnection')
const Client = require('../models/clientModel')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

generateAnId = () => {
    let id = guidGenerator();
    return id
}

guidGenerator = () => {
    const S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

checkDouble = (id) => {
    return Client.findAll({ where: { _id: id } }).then((data) => {
        console.log(data)
        if (!data.length === 0) {
            let newId = generateAnId()
            checkDouble(newId)
            return
        } else {
            console.log(id)
            return id;
        }
    })
}

router.get('', function (req, res) {
    Client.findAll({}).then(data => {
        res.send(data)
    })
});

router.post('', async function (req, res) {
    let id = generateAnId()
    let uniqeId = await checkDouble(id)
    let newClient = req.body
    newClient._id = uniqeId
    console.log(newClient)
    Client.create(newClient).then(() => {
        Client.findAll({}).then(data => {
            res.send(data)
        })
    })
});

router.delete('/:clientID', function(req,res){
    let id = req.params.clientID
    console.log(req.params.clientID)
    Client.destroy({where:{_id: id}}).then(()=>{
        Client.findAll({}).then((data)=>{
            res.send(data)
        })
    })
});

router.put('', function(req, res){
    let updatedClient = req.body
    Client.update(
        {
            name: updatedClient.name,
            email: updatedClient.email,
            country: updatedClient.country,
            emailType: updatedClient.emailType,
            owner: updatedClient.owner,
            sold: updatedClient.sold
        },
        {
            where: {_id: updatedClient._id}
        }
    ).then(()=>{
        Client.findAll({}).then((data)=>{
            res.send(data)
        })
    })
})

module.exports = router
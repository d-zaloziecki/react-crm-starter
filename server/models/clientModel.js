const Sequelize = require('sequelize')
const sequelize = require('./sqlConnection')

const Client = sequelize.define('client', {
    _id: {
        type: Sequelize.STRING,
        primaryKey: true
    }, name: {
        type: Sequelize.STRING
    }, email: {
        type: Sequelize.STRING
    }, firstContact: {
        type: Sequelize.DATE
    }, emailType: {
        type: Sequelize.STRING
    }, sold: {
        type: Sequelize.BOOLEAN
    }, owner: {
        type: Sequelize.STRING
    }, country: {
        type: Sequelize.STRING
    }
})

// Client.sync({forse:true})

// const clients = require('../../data/data.json')

// for(let i of clients){
//     Client.create(i)
// }

module.exports = Client;
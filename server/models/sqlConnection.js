const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://sql12263204:VmXKhClVJf@sql12.freesqldatabase.com/sql12263204');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

module.exports = sequelize;
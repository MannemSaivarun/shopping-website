const Sequelize = require('sequelize');

const sequelize = new Sequelize('redux-site','root','Msv@1234',{
    dialect: 'mysql',
    host:'localhost'
})

module.exports = sequelize
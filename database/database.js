const Sequelize = require('sequelize');

const Connection =  new Sequelize('guiapress', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = Connection;
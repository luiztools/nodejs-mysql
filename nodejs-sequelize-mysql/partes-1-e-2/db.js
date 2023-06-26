const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'luiztools', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
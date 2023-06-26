const Sequelize = require('sequelize');
const database = require('../db');

const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING(11),
        allowNull: true
    }
}, {
    timestamps: false
})

module.exports = Cliente;
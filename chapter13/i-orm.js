const { Sequelize, DataTypes } = require('sequelize');


// Initialize Sequelize
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});


// Define a model
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


// User input
const userId = req.body.userId; // Assume this comes from user input
// Safe query using Sequelize
User.findOne({ where: { id: userId } })
    .then(user => {
        console.log(user);
    })
    .catch(err => {
        console.error(err);
    });

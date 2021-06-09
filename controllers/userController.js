const { User } = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req,res) {
    
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    User.create(user).then(response => {

        res.status(201).json({
            message: "User created successfully"
        });

    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong"
        });
    });
}

module.exports = {
    signUp: signUp
}
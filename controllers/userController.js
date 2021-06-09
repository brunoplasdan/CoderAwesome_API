const { User } = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req, res) {

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(result => {
        if (result) {
            res.status(509).json({
                message: "Email already exists!"
            });
        } else {


            bcryptjs.genSalt(10, function (err, salt) {
                bcryptjs.hash(req.body.password, salt, function (err, hash) {

                    const user = {
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
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

                });

            });

        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    })




}

module.exports = {
    signUp: signUp
}
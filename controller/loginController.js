var db = require("../models");
var passport = require("passport");
var authController = require('./authController.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const Users = require("../../models/user");
const validateLogin = require("../../validation/login");

module.exports = {
    findAll: function (req, res) {
        db.Users
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        const { errors, isValid } = validateLogin(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const username = req.body.username;
        const password = req.body.password;
        Users.findOne({ username }).then(user => {
            if (!user) {
                return res.status(404).json({ usernamenotfound: "That username does not exist" });
            }
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        name: user.name
                    };
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn: 1209600 // 2 weeks
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                    );
                } else {
                    return res
                        .status(400)
                        .json({ passwordincorrect: "Password incorrect" });
                }
            });
        });
    }
};

module.exports = router;
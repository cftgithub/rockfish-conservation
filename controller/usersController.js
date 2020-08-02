var db = require("../models");
var passport = require("passport");
var authController = require('./authController.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/user");
const validateRegister = require("../validation/register");


// const { session } = require("passport");

module.exports = {
    findAll: function (req, res) {
        db.Users
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        const { errors, isValid } = validateRegister(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        db.Users.findOne({ username: req.body.username }).then(user => {
            if (user) {
                return res.status(400).json({ username: "That username is taken" });
            } else {
                const newUser = new Users({
                    username: req.body.name,
                    password: req.body.password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    }
};


//     app.get('/users/login', authController.login);

//     app.get('/users/logout', function (req, res) {
//         req.logout();
//         res.clearCookie('connect.sid', { path: '/' });
//         req.session.destroy(function () {
//             res.clearCookie('connect.sid');
//             res.redirect('/');
//         });
//     });

//     app.post('/users/login', passport.authenticate('local-login', {
//         successRedirect: '/Creel',
//         failureRedirect: '/'
//     }));

//     app.get('/users/authenticate', function (req, res) {
//         if (req.session.passport) {
//             console.log(req.session.passport.user);
//             db.Users.findOne({
//                 where: {
//                     id: req.session.passport.user
//                 }
//             }).then(function (user) {
//                 console.log(user.dataValues);
//                 res.send(user.dataValues);
//             });
//         }
//     });

//     app.post('/users/register', passport.authenticate('local-register', {
//         successRedirect: '/Creel',
//         failureRedirect: '/'
//     }));

//     function isLoggedIn(req, res, next) {
//         if (req.isAuthenticated())
//             return next();
//         res.redirect('/users/login');
//     }
// };
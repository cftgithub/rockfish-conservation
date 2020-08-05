var db = require("../models");
var passport = require("passport");
var authController = require('./authController.js');
const { session } = require("passport");

module.exports = function (app) {
    app.get("/users", function (req, res) {
        db.Users.findAll({
        }).then(function (data) {
            res.send(data);
        });
    });

    app.get('/users/register', authController.register);

    app.get('/users/login', authController.login);

    app.get('/users/logout', function (req, res) {
        req.logout();
        res.clearCookie('connect.sid', { path: '/' });
        req.session.destroy(function () {
            res.clearCookie('connect.sid');
            res.redirect('/');
        });
    });

    app.post('/users/login', passport.authenticate('local-login', {
        successRedirect: '/Creel',
        failureRedirect: '/'
    }));

    app.get('/users/authenticate', function (req, res) {
        if (req.session.passport) {
            db.Users.findOne({
                where: {
                    id: req.session.passport.user
                }
            }).then(function (user) {
                res.send(user.dataValues);
            });
        }
    });

    app.post('/users/register', passport.authenticate('local-register', {
        successRedirect: '/Creel',
        failureRedirect: '/'
    }));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/users/login');
    }
};

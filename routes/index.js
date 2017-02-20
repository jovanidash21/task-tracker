var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res, next) {
    if(req.user){
        res.render('index', {
            user: req.user,
            title: 'Todo List'
        });
    }
    else {
        res.render('login', {
            title: 'Login | Todo List',
            alertMessage: req.flash('alertMessage')
        });
    }
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user) {
        if(!err){
            if(!user){
                req.flash('alertMessage', 'Invalid username or password!');
                res.redirect('/');
            }
            else{
                req.logIn(user, function(err) {
                    if(!err){
                        res.redirect('/');
                    }
                    else{
                        res.end(err);
                    }
                })
            }
        }
        else {
            res.end(err);
        }
    })(req, res, next);
});

router.post('/signup', function(req, res, next) {
    var user = {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };

    if (req.body.password != req.body.confirmPassword) {
        req.flash('alertMessage', "Passwords Don't Match");
        res.redirect('/');
    }

    usersData.register(new usersData(user), req.body.confirmPassword, function(err) {
        if(!err){
            passport.authenticate('local', function(err, user) {
                req.logIn(user, function(err) {
                    if(!err){
                        res.redirect('/');
                    }
                    else{
                        res.end(err);
                    }
                })
            })(req, res, next);
        }
        else
        {
            req.flash('alertMessage', 'Sorry! Username already exists.');
            res.redirect('/');
        }
    });
});

router.post('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;

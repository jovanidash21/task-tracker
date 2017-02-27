var express = require('express');
var router = express.Router();
var usersData = require('../models/users-data-schema');
var tasksData = require('../models/tasks-data-schema');

router.get('/user', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        res.json([req.user]);
    }
});

router.patch('/:userID', function(req, res, next) {
    if (req.user === undefined) {
        res.redirect('/');
    }
    else {
        var userID = req.params.userID;
        if (req.user._id == userID) {
            usersData.findByIdAndUpdate(userID, req.body, function(err, results) {
                if(err) {
                    res.end(err);
                }
                else {
                    res.json(results);
                }
            });
        }
        else {
            res.redirect('/');
        }
    }
});

router.get('/:userID/tasks/', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        var userID = req.params.userID;
        if (req.user._id == userID) {
            usersData.findById(userID, 'tasks').populate('tasks').exec(function(err, userTasks) {
                if(err) {
                    res.end(err);
                }
                else {
                    res.json({userTasks});
                }
            });
        }
        else {
            res.json({});
        }
    }
});

module.exports = router;
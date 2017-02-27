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
            usersData.findById(userID, 'tasks')
                .populate('tasks')
                .exec(function(err, userTasks) {
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

router.post('/:userID/tasks/start', function(req, res, next) {
    if (req.user === undefined) {
        res.redirect('/');
    }
    else {
        var userID = req.params.userID;
        if (req.user._id == userID) {
            var taskData = new tasksData({owner: userID});
            taskData.save(function(err) {
                if(err) {
                    res.end(err);
                }
                else {
                    var taskID = taskData._id;
                    usersData.findByIdAndUpdate(
                        userID,
                        { $push: { tasks: { $each: [taskID], $position: 0 }}},
                        { new: true, upsert: true },
                        function(err, results) {
                            if(err) {
                                res.end(err);
                            }
                            else {
                                res.json(results);
                            }
                        }
                    );
                }
            });
        }
        else {
            res.redirect('/');
        }
    }
});

router.post('/:userID/tasks/end', function(req, res, next) {
    if (req.user === undefined) {
        res.redirect('/');
    }
    else {
        var userID = req.params.userID;
        if (req.user._id == userID) {
            var taskData = new tasksData({owner: userID});
            taskData.save(function(err) {
                if(err) {
                    res.end(err);
                }
                else {
                    var taskID = taskData._id;
                    usersData.findByIdAndUpdate(
                        userID,
                        { $push: { tasks: taskID }},
                        { new: true, upsert: true },
                        function(err, results) {
                            if(err) {
                                res.end(err);
                            }
                            else {
                                res.json(results);
                            }
                        }
                    );
                }
            });
        }
        else {
            res.redirect('/');
        }
    }
});

router.patch('/:userID/task/:taskID', function(req, res, next) {
    if (req.user === undefined) {
        res.redirect('/');
    }
    else {
        var userID = req.params.userID;
        var taskID = req.params.taskID;
        if (req.user._id == userID) {
            tasksData.findById(taskID, function(err, taskData) {
                if(err) {
                    res.end(err);
                }
                else {
                    if (taskData.owner != userID) {
                        res.redirect('/');
                    }
                    else {
                        taskData.update(req.body, function(err, results) {
                            if(err) {
                                res.end(err);
                            }
                            else {
                                res.json(results);
                            }
                        });
                    }
                }
            });
        }
        else {
            res.redirect('/');
        }
    }
});

router.delete('/:userID/task/:taskID', function(req, res, next) {
    if (req.user === undefined) {
        res.redirect('/');
    }
    else {
        var userID = req.params.userID;
        var taskID = req.params.taskID;
        if (req.user._id == userID) {
            tasksData.findById(taskID, function(err, taskData) {
                if(err) {
                    res.end(err);
                }
                else {
                    if (taskData.owner != userID) {
                        res.redirect('/');
                    }
                    else {
                        taskData.remove(function(err) {
                            if(err) {
                                res.end(err);
                            }
                            else {
                                usersData.findByIdAndUpdate(
                                    userID,
                                    { $pull: { tasks: taskID }},
                                    { new: true, upsert: true },
                                    function(err, results) {
                                        if(err) {
                                            res.end(err);
                                        }
                                        else {
                                            res.json(results);
                                        }
                                    }
                                );
                            }
                        });
                    }
                }
            });
        }
        else {
            res.redirect('/');
        }
    }
});

module.exports = router;
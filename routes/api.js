var express = require('express');
var router = express.Router();

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
        usersData.findByIdAndUpdate({_id: userID}, req.body, function(err, results) {
            if(err){
                res.end(err);
            }
            else {
                res.json(results);
            }
        });
    }
});

module.exports = router;
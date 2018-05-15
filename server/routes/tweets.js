const express = require('express');
const router = express.Router();
var Tweet = require('../models/tweet');
// Get tweets
router.get('/', (req, res) => {
    Tweet.find({}).sort([['_id', 1]]).exec(function(err,tweets){
        if(!err){
            res.json(tweets);
        }
    });
});
module.exports = router;
const express = require('express');
var Twitter = require('twitter');
const router = express.Router();
var Tweet = require('../models/tweet');
var config = require('../../_config');


var client = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
  });
  var params = {screen_name: config.screen_name};


router.post('/events',(req, res) => {
    Tweet.collection.remove();
    req.on('data',(chunk) => { 
        if(chunk.toString().split('&')[0].split('=')[1] == config.slackToken){
            var words = chunk.toString().split('&')[9].split('=')[1].split('+');
            var goFlag = 0;
            for (i = 0; i < words.length; i++) {
                if (words[i] === "go") {
                    goFlag = 1 ;
                }
            }
            if(goFlag==1) {  
                client.get('statuses/user_timeline', params, function(error, tweets, response) {
                    if (!error) {
                        for (i = 0; i < tweets.length; i++) {
                            var tweet = new Tweet;
                            tweet.created_at=tweets[i].created_at;
                            tweet.text=tweets[i].text;
                            tweet.id_str=tweets[i].id_str;
                            tweet.username=tweets[i].user.name;
                            tweet.save(function(error) {
                                if (!error) {
                                } else {
                                    throw error;
                                }
                            });
                        }
                    }
                });
            }
        }                               
    });
});

module.exports = router;
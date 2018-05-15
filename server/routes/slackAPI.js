const express = require('express');
var Twitter = require('twitter');
const router = express.Router();
var Tweet = require('../models/tweet');
var slackToken = "Q5ecS4Gb21ASsJv1b4DAmFR2";

var client = new Twitter({
    consumer_key: 'jQ43598qG3gxHdmgkiq7heUgB',
    consumer_secret: 'XbA0oBmPWbpgBnJ13ShUoOjwHwvnvljz8lR8klcPfjL3dlINvX',
    access_token_key: '996106821348839427-94XXOUeTXEjdSZn0E2ahWIAmlEPAhCA',
    access_token_secret: 'uCcANUy4sEF12i00LxQeRvamXZGiaYKc7w3MlOPGkCBxA'
  });
  var params = {screen_name: 'FictionFone2'};


router.post('/events',(req, res) => {
    Tweet.collection.remove();
    req.on('data',(chunk) => { 
        if(chunk.toString().split('&')[0].split('=')[1] == slackToken){
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
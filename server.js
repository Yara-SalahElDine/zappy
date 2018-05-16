const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
var mongoose = require('mongoose');
var config = require('./_config');
const app = express();
mongoose.connect(config.mongoURI[app.settings.env]);
mongoose.connection.once('open',() => {
    console.log('connected to mongo')
});
mongoose.connection.on('error',(err) => {
    console.log('error connecting to mongo',err)
});

// Tweets Controller
const tweetsCtrl = require('./server/routes/tweets');
// Slack  Api Controller
const slackCtrl = require('./server/routes/slackAPI');
// Parsers
app.use(bodyParser.json());
// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/tweets', tweetsCtrl);
app.use('/slack', slackCtrl);
// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.set('port', config.port);
const server = http.createServer(app);
server.listen(config.port, () => console.log(`Running on localhost:${config.port}`));
module.exports = app;
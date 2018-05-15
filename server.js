const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
var mongoose = require('mongoose');
const app = express();
const port = 3000;
mongoose.connect('mongodb://localhost:27017/zappy');
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
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
var express = require('express');
var path  = require('path')
var bodyParser = require('body-parser')
var events = require('./eventObjects')

var app = express()
var rootPath = path.resolve(__dirname + '/../')

app.use(express.static(rootPath + '/app'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/data/event/', events.getAll)
app.post('/data/event/', events.saveEvent)
app.post('/data/users/:userName', events.updateVote)
app.post('/data/users/:userLogin', events.loginUser)
app.post('/data/users/:userName', events.saveUser)

app.get('*', function (req, res) {
    res.sendFile(rootPath + '/app/index.html')
})

app.listen(8000, function() {
    console.log('App started on 8000');
});
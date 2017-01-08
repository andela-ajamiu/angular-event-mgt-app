var fs = require('fs');

// module.exports.fetch = function(req, res) {
//     var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
//     res.setHeader('Content-Type', 'application/json');
//     res.send(event);
// };

module.exports.saveUser = function (req, res) {
    var user = req.body;
    fs.writeFileSync('app/data/users/' + user.userName + '.json', JSON.stringify(user));
    res.send(user);
}

module.exports.saveEvent = function(req, res) {
    var event = req.body;
    fs.readdir('app/data/event/', (err, files) => {
        var newarr = []
        files.forEach((file) => {
            var newfile = file.replace(/\.json/g, '')
            newarr.push(parseInt(newfile))
        })
        var newEventId = Math.max(...newarr) + 1
        event.id = newEventId
        fs.writeFileSync('app/data/event/' + newEventId + '.json', JSON.stringify(event));
        res.send(event);
    })
}
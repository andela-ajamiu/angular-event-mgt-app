var fs = require('fs');

// module.exports.fetch = function(req, res) {
//     var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
//     res.setHeader('Content-Type', 'application/json');
//     res.send(event);
// };

module.exports.getAll = function (req, res) {
    var path = 'app/data/event/';
    var files = [];

    try {
        files = fs.readdirSync(path);
    } catch (e) {
        res.send('[]');
        res.end();
    }
    
    var resu = [];

    files.map(function (file) {
        var newFile = fs.readFileSync(path + file, 'utf8')
        var JSONFile = JSON.parse(newFile)
        resu.push(JSONFile)
    })

    res.setHeader('Content-Type', 'application/json');
    res.send(resu);
    res.end();

    // var results = "[";
    // for (var i=0; i < files.length; i++) {
    //     if (files[i].indexOf(".json") == files[i].length - 5 ) {
    //         results += fs.readFileSync(path + files[i]) + ",";
    //     }
    // }
    // results = results.substr(0, results.length - 1);
    // results += "]";
};

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
        fs.writeFileSync()
        fs.appendFile()
        res.send(event);
    })
};

module.exports.loginUser = function(req, res) {
    var user = fs.readFileSync('app/data/users/' + req.params.userLogin + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    var userx = JSON.parse(user)

    if (userx.password === req.body.password) {
        res.send(user);
    } else {
        return false;
    }
};

module.exports.saveUser = function (req, res) {
    var user = req.body;
    fs.writeFileSync('app/data/users/' + user.userName + '.json', JSON.stringify(user));
    res.send(user);
};

module.exports.updateVote = function (req, res) {
    console.log('nodddd')
    // var vote = req.body;
    // var user = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
    // console.log(typeof user)
    // fs.appendFile('app/data/users/' + req.params.userFile + '.json', JSON.stringify(user));
    // var user = fs.readFileSync('app/data/users/' + req.params.userFile + '.json', 'utf8');
    // res.setHeader('Content-Type', 'application/json');
    // res.send(user);
};
var glob = require('glob'),
    path = require('path'),
    express = require('express'),
    router = express.Router();
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/new';


var _db;

function connect(callback) {
    mongo.connect(url, function(err, db) {
    if (err) { return console.log(err); }

        _db = db;
        return callback(err);
    });
}

connect(function(err) {
    if (err) { return console.log(err); }

    var file = require(path.resolve('./authors.json'));

    file.forEach(function(arr) {
        var name = arr.name;

        _db.collection('authors').insert({name: name});
    });

    _db.close();
});

// manual reindex
router.get('/', function(req, res, next) {
  autoReindex();
  res.send(indexTarget);
});

module.exports = router;

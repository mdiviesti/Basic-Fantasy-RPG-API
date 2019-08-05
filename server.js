let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('bfrpgData.sqlite3');

var express = require('express');
var restapi = express();

restapi.get('/', function (request, response) {
    let endpoints = {
        "/all/names": "Get all the race names from the dataset",
        "/all/races": "Get all records for all races in the database",
        "/core/names": "Get only core race names from the dataset",
        "/core/races": "Get records for all the core races in the database",
        "/races/name/:name": "Replace :name with a race name to get that race's specific records"
    };
    response.json(endpoints);
});

restapi.get('/all/names', function (request, response) {
    db.all("SELECT name FROM races", function (err, row) {
        response.json(row);
    });
});

restapi.get('/all/races', function (request, response) {
    db.all("SELECT * FROM races", function (err, row) {
        response.json(row);
    });
});

restapi.get('/core/names', function (request, response) {
    db.all("SELECT name FROM races WHERE core = 1", function (err, row) {
        response.json(row);
    });
});

restapi.get('/core/races', function (request, response) {
    db.all("SELECT * FROM races WHERE core = 1", function (err, row) {
        response.json(row);
    });
});

restapi.get('/races/name/:name', function (request, response) {
    let name = request.params.name;
    db.all("SELECT * FROM races WHERE lower(name) = (?)", name.toLowerCase(), function (err, row) {
        response.json(row);
    });
});

restapi.listen(3000);

console.log("Submit GET or POST to http://localhost:3000/endpoints");

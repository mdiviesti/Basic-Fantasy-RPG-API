let racesData = require('./jsondata/RacesData.js');
var RacesData = new racesData();
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
    response.json(RacesData.getAllRaceNames());
});

restapi.get('/all/races', function (request, response) {
    response.json(RacesData.getData());
});

restapi.get('/core/names', function (request, response) {
    response.json(RacesData.getCoreRaceNames());
});

restapi.get('/core/races', function (request, response) {
    response.json(RacesData.getCoreRaces());
});

restapi.get('/races/name/:name', function (request, response) {
    let name = request.params.name;
    response.json(RacesData.getRaceByName(name));
});

restapi.listen(3000);

console.log("Submit GET or POST to http://localhost:3000/");

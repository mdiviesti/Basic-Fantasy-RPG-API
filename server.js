let racesData = require('./modules/RacesData');
let classesDate = require('./modules/ClassesData');
var cors = require('cors');

var RacesData = new racesData();
var ClassesData = new classesDate();
var express = require('express');
var restapi = express();

restapi.use(cors());

restapi.get('/', function (request, response) {
    let endpoints = [{
        "races": {
            "/races": "Get all records for all races.",
            "/races/core": "Get records for core races only",
            "/races/names": "Get all the race names from the dataset",
            "/races/names/core": "Get only core race names from the dataset",
            "/races/name/:name": "Replace :name with a race name to get that race's specific records"
        }
    }, {
        "classes": {
            "/classes": "Get all records for all classes.",
            "/classes/core": "Get records for core classes only",
            "/classes/names": "Get all the class names from the dataset",
            "/classes/names/core": "Get only core class names from the dataset",
            "/classes/name/:name": "Replace :name with a class name to get that specific class record"
        }
    }];
    response.json(endpoints);
});

/**
 * Races endpoints
 */
restapi.get('/races', function (request, response) {
    response.json(RacesData.getRaces());
});

restapi.get('/races/core', function (request, response) {
    response.json(RacesData.getRacesCore());
});

restapi.get('/races/names', function (request, response) {
    response.json(RacesData.getRacesNames());
});

restapi.get('/races/names/core', function (request, response) {
    response.json(RacesData.getRacesNamesCore());
});

restapi.get('/races/name/:name', function (request, response) {
    let name = request.params.name;
    response.json(RacesData.getRaceByName(name));
});

/**
 * Classes endpoints
 */

restapi.get('/classes', function (request, response) {
    response.json(ClassesData.getClasses());
});

restapi.get('/classes/core', function (request, response) {
    response.json(ClassesData.getClassesCore());
});

restapi.get('/classes/names', function (request, response) {
    response.json(ClassesData.getClassesNames());
});

restapi.get('/classes/names/core', function (request, response) {
    response.json(ClassesData.getClassesNamesCore());
});

restapi.get('/classes/name/:name', function (request, response) {
    let name = request.params.name;
    response.json(ClassesData.getClassByName(name));
});

restapi.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
});

console.log("Submit GET or POST to http://localhost:3000/");

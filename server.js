let racesData = require('./modules/RacesData');
let classesData = require('./modules/ClassesData');
let spellsData = require('./modules/SpellsData');
var cors = require('cors');

var RacesData = new racesData();
var ClassesData = new classesData();
var SpellsData = new spellsData();
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
    }, {
        "spells": {
            "/spells": "Get all spells.",
            "/spells/core": "Get core spells",
            "/spells/class/:name": "Get spells by class name",
            "/spells/level/:level": "Get spells by level",
            "/spells/name/:name": "Get spells by name",
            "/spells/class/:name/level/:level": "Get spells by class and level"
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

/**
 * spells endpoints
 */

restapi.get('/spells', function (request, response) {
    response.json(SpellsData.getSpells());
});

restapi.get('/spells/core', function (request, response) {
    response.json(SpellsData.getSpellsCore());
});

restapi.get('/spells/class/:name', function (request, response){
    let name = request.params.name;
    response.json(SpellsData.getSpellsByClass(name));
});

restapi.get('/spells/level/:level', function (request, response){
    let level = request.params.level;
    response.json(SpellsData.getSpellsByLevel(level));
});

restapi.get('/spells/name/:name', function (request, response){
    let name = request.params.name;
    response.json(SpellsData.getSpellsByName(name));
});

restapi.get('/spells/class/:name/level/:level', function (request, response){
    let name = request.params.name;
    let level = request.params.level;
    response.json(SpellsData.getSpellsByClassAndLevel(name, level));
});

restapi.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
});

console.log("Submit GET or POST to http://localhost:3000/");

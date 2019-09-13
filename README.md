[![License Github](https://img.shields.io/github/license/mdiviesti/Basic-Fantasy-RPG-API.svg)](https://img.shields.io/github/license/mdiviesti/Basic-Fantasy-RPG-API.svg)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://img.shields.io/badge/version-1.0.0-green.svg)
[![Node Version](https://img.shields.io/badge/node-10.15.3-lightgrey.svg)](https://img.shields.io/badge/node-10.15.3-lightgrey.svg)
[![Express Version](https://img.shields.io/badge/express-4.17.1-lightgrey.svg)](https://img.shields.io/badge/express-4.17.1-lightgrey.svg)

## Table of contents
* [Introduction](#basic-fantasy-rpg-api)
* [Current State](#currenct-state)
* [Future State](#future-state)
* [Requirements](#requirements)
* [Dependencies](#dependencies)
* [Installation](#installation)
* [Running the Server](#running-the-server)
* [Endpoints](#endpoints)
* [Contribute](#contribute)
* [Reporting Bugs/Request Features](#reporting-bugs)


## Basic Fantasy RPG API
Basic Fantasy RPG API built with NodeJS

This is a work in progress API for the Basic Fantasy Role-Playing Game rule system. 
Basic Fantasy Role-Playing Game is distributed under the terms of the Open Game License version 1.0a. More 
information about the Open Game License can be found at 
http://opengamingfoundation.org/ogl.html  

Basic Fantasy Role-Playing Game rule system can be found at https://www.basicfantasy.org/ 

This software is released under the MIT license, however use of the data provided requires that you also distribute 
or link to the OGL in any public or commercial use including public software versioning and distribution hubs. 

## current state
All Core components are from the Basic Fantasy RPG Rules r107 — 3rd Edition Core Rules

Races: All race data for Player Character (PC) from all existing material on the download page has been added and exposed
via the endpoints.

Classes: Basic Class data for PCs from the core rule book has been added. 

Saving Throws: have not yet been added

Spells: have not yet been added.

# future state
The future of this project is to have a complete API with all character related core elements plus character related 
supplemental elements. The hope is that anyone could use it to build both core and non-core characters easily without having to thumb through all of the books to find everything.
This is not an attempt to replace the books, but simply an attempt to augment the great work that Chris Gonnerman and others have done to bring this amazing RPG to us. 
You still need the books in order to play, as the game mechanics themselves are not going to be included in this API.

While there are plans to add items, monsters, vehicles, and other objects to this API, the main focus at the moment is to get character build and spell related data completed.

# Requirements
NodeJS

# Dependencies 
express
cores

# Installation
```npm install```

# running the server
```node server.js```

# endpoints
```
races
    "/races": "Get all records for all races.",
    "/races/core": "Get records for core races only",
    "/races/names": "Get all the race names from the dataset",
    "/races/names/core": "Get only core race names from the dataset",
    "/races/name/:name": "Replace :name with a race name to get that race's specific records"

classes
    "/classes": "Get all records for all classes.",
    "/classes/core": "Get records for core classes only",
    "/classes/names": "Get all the class names from the dataset",
    "/classes/names/core": "Get only core class names from the dataset",
    "/classes/name/:name": "Replace :name with a class name to get that specific class record"
      
```

# Contribute
Feel free to fork the repo and make pull requests.

# Reporting bugs
You can report bugs or request features using the github issue tracker. 
https://github.com/mdiviesti/Basic-Fantasy-RPG-API/issues

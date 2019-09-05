## Table of contents
* [Introduction](#basic-fantasy-rpg-api)
* [Current State](#currenct-state)


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

Currently, I've added data and endpoints for Player Character (PC) races. These were direct copies from both the 3rd 
edition manual mentioned above and the supplements which have been provided for use on the website. 

The Core classes have also been added from the r107 Rules. Future updates will include the additional classes
 provided in supplements. 

Current endpoints are read only.

# future state
Races are currently just the text as it appears in the books. For items like Special Abilities, Saving Throws, and 
Restrictions this data isn't exactly usable for anything computational (like programatically restricting a specific 
race if you've rolled too low on a strength stat for example). This data will be reformatted in a way that will make 
those computations available. 
I also plan to add classes, items, the beastiary, spells, transportation methods, and other pieces of data that will 
be useful to you.

# Requirements
NodeJS

# Dependencies 
express

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

# Bug Reporting, feature requests... etc
Feel free to use the issues feature https://github.com/mdiviesti/Basic-Fantasy-RPG-API/issues

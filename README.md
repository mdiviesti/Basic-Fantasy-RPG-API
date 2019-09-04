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
Currently, I've added data and endpoints for Player Character (PC) races. These were direct copies from both the 3rd 
edition manual and the supplements which have been provided for use on the website. 
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
{
    "/all/names": "Get all the race names from the dataset",
    "/all/races": "Get all records for all races in the database",
    "/core/names": "Get only core race names from the dataset",
    "/core/races": "Get records for all the core races in the database",
    "/races/name/:name": "Replace :name with a race name to get that race's specific records"
}
```

# Contribute
Feel free to fork the repo and make pull requests.

# Bug Reporting, feature requests... etc
Feel free to use the issues feature https://github.com/mdiviesti/Basic-Fantasy-RPG-API/issues

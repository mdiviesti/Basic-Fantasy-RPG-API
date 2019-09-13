class ClassesData {
    getClasses() {
        return [{
            "Core": 1,
            "Name": "Cleric",
            "Description": "Clerics are those who have devoted themselves to the service of a deity, pantheon or other belief system. Most Clerics spend their time in mundane forms of service such as preaching and ministering in a temple; but there are those who are called to go abroad from the temple and serve their deity in a more direct way, smiting undead monsters and aiding in the battle against evil and chaos. Player character Clerics are assumed to be among the latter group. Clerics fight about as well as Thieves, but not as well as Fighters. They are hardier than Thieves, at least at lower levels, as they are accustomed to physical labor that the Thief would deftly avoid. Clerics can cast spells of divine nature starting at 2nd level, and they have the power to Turn the Undead, that is, to drive away undead monsters by means of faith alone (see the Encounter section for details). The Prime Requisite for Clerics is Wisdom; a character must have a Wisdom score of 9 or higher to become a Cleric. They may wear any armor, but may only use blunt weapons (specifically including warhammer, mace, maul, club, quarterstaff, and sling).",
            "PrimeRequisite": [ {stat: 'wisdom', min: 9 } ],
            "Armor": "Any",
            "Weapons": "Blunt",
            "Advancement": [{
                "Level": 1, "XP": 0, "HitDice": "1d6", "Spells": {}
            }, {
                "Level": 2, "XP": 1500, "HitDice": "2d6", "Spells": {1: 1}
            }, {
                "Level": 3, "XP": 3000, "HitDice": "3d6", "Spells": {1: 2}
            }, {
                "Level": 4, "XP": 6000, "HitDice": "4d6", "Spells": {1: 2, 2: 1}
            }, {
                "Level": 5, "XP": 12000, "HitDice": "5d6", "Spells": {1: 2, 2: 2}
            }, {
                "Level": 6, "XP": 24000, "HitDice": "6d6", "Spells": {1: 2, 2: 2, 3: 1}
            }, {
                "Level": 7, "XP": 48000, "HitDice": "7d6", "Spells": {1: 3, 2: 2, 3: 2}
            }, {
                "Level": 8, "XP": 90000, "HitDice": "8d6", "Spells": {1: 3, 2: 2, 3: 2, 4: 1}
            }, {
                "Level": 9, "XP": 180000, "HitDice": "9d6", "Spells": {1: 3, 2: 3, 3: 2, 4: 2}
            }, {
                "Level": 10, "XP": 270000, "HitDice": "9d6+1", "Spells": {1: 3, 2: 3, 3: 2, 4: 2, 5: 1}
            }, {
                "Level": 11, "XP": 360000, "HitDice": "9d6+2", "Spells": {1: 4, 2: 3, 3: 3, 4: 2, 5: 2}
            }, {
                "Level": 12, "XP": 450000, "HitDice": "9d6+3", "Spells": {1: 4, 2: 4, 3: 3, 4: 2, 5: 2, 6: 1}
            }, {
                "Level": 13, "XP": 540000, "HitDice": "9d6+4", "Spells": {1: 4, 2: 4, 3: 3, 4: 3, 5: 2, 6: 2}
            }, {
                "Level": 14, "XP": 630000, "HitDice": "9d6+5", "Spells": {1: 4, 2: 4, 3: 4, 4: 3, 5: 2, 6: 2}
            }, {
                "Level": 15, "XP": 720000, "HitDice": "9d6+6", "Spells": {1: 4, 2: 4, 3: 4, 4: 3, 5: 3, 6: 2}
            }, {
                "Level": 16, "XP": 810000, "HitDice": "9d6+7", "Spells": {1: 5, 2: 4, 3: 4, 4: 3, 5: 3, 6: 2}
            }, {
                "Level": 17, "XP": 900000, "HitDice": "9d6+8", "Spells": {1: 5, 2: 5, 3: 4, 4: 3, 5: 3, 6: 2}
            }, {
                "Level": 18, "XP": 990000, "HitDice": "9d6+9", "Spells": {1: 5, 2: 5, 3: 4, 4: 4, 5: 3, 6: 3}
            }, {
                "Level": 19, "XP": 1080000, "HitDice": "9d6+10", "Spells": {1: 6, 2: 5, 3: 4, 4: 4, 5: 3, 6: 3}
            }, {
                "Level": 20, "XP": 1170000, "HitDice": "9d6+11", "Spells": {1: 6, 2: 5, 3: 5, 4: 4, 5: 3, 6: 3}
            }]
        }, {
            "Core": 1,
            "Name": "Fighter",
            "Description": "Fighters include soldiers, guardsmen, barbarian warriors, and anyone else for whom fighting is a way of life. They train in combat, and they generally approach problems head on, weapon drawn. Not surprisingly, Fighters are best at fighting of all the classes. They are also the hardiest, able to take more punishment than any other class. Although they are not skilled in the ways of magic, Fighters can nonetheless use many magic items, including but not limited to magical weapons and armor. The Prime Requisite for Fighters is Strength; a character must have a Strength score of 9 or higher to become a Fighter. Members of this class may wear any armor and use any weapon.",
            "PrimeRequisite": [ {stat: 'strength', min: 9 } ],
            "Armor": "Any",
            "Weapons": "Any",
            "Advancement": [{
                "Level": 1, "XP": 0, "HitDice": "1d8"
            }, {
                "Level": 2, "XP": 2000, "HitDice": "2d8"
            }, {
                "Level": 3, "XP": 4000, "HitDice": "3d8"
            }, {
                "Level": 4, "XP": 8000, "HitDice": "4d8"
            }, {
                "Level": 5, "XP": 16000, "HitDice": "5d8"
            }, {
                "Level": 6, "XP": 32000, "HitDice": "6d8"
            }, {
                "Level": 7, "XP": 64000, "HitDice": "7d8"
            }, {
                "Level": 8, "XP": 120000, "HitDice": "8d8"
            }, {
                "Level": 9, "XP": 240000, "HitDice": "9d8"
            }, {
                "Level": 10, "XP": 360000, "HitDice": "9d8+2"
            }, {
                "Level": 11, "XP": 480000, "HitDice": "9d8+4"
            }, {
                "Level": 12, "XP": 600000, "HitDice": "9d8+6"
            }, {
                "Level": 13, "XP": 7200000, "HitDice": "9d8+8"
            }, {
                "Level": 14, "XP": 840000, "HitDice": "9d8+10"
            }, {
                "Level": 15, "XP": 960000, "HitDice": "9d8+12"
            }, {
                "Level": 16, "XP": 1080000, "HitDice": "9d8+14"
            }, {
                "Level": 17, "XP": 1200000, "HitDice": "9d8+16"
            }, {
                "Level": 18, "XP": 1320000, "HitDice": "9d8+18"
            }, {
                "Level": 19, "XP": 1440000, "HitDice": "9d8+20"
            }, {
                "Level": 20, "XP": 1560000, "HitDice": "9d8+22"
            }]
        }, {
            "Core": 1,
            "Name": "Magic-User",
            "Description": "Magic-Users are those who seek and use knowledge of the arcane. They do magic not as the Cleric does, by faith in a greater power, but rather through insight and understanding. Magic-Users are the worst of all the classes at fighting; hours spent studying massive tomes of magic do not lead a character to become strong or adept with weapons. They are the least hardy, equal to Thieves at lower levels but quickly falling behind. The Prime Requisite for Magic-Users is Intelligence; a character must have an Intelligence score of 9 or higher to become a Magic-User. The only weapons they become proficient with are the dagger and the walking staff (or cudgel). Magic-Users may not wear armor of any sort nor use a shield as such things interfere with spellcasting. A first level Magic-User begins play knowing read magic and one other spell of first level. These spells are written in a spellbook provided by his or her master. The GM may roll for the spell, assign it as he or she sees fit, or allow the player to choose it, at his or her option. See the Spells section for more details.",
            "PrimeRequisite": [ {stat: 'intelligence', min: 9 } ],
            "Armor": "none",
            "Weapons": "Dagger, Walking Staff, Cudgel",
            "Advancement": [{
                "Level": 1, "XP": 0, "HitDice": "1d4", "Spells": {1: 1}
            }, {
                "Level": 2, "XP": 2500, "HitDice": "2d4", "Spells": {1: 2}
            }, {
                "Level": 3, "XP": 5000, "HitDice": "3d4", "Spells": {1: 2, 2: 1}
            }, {
                "Level": 4, "XP": 10000, "HitDice": "4d4", "Spells": {1: 2, 2: 2}
            }, {
                "Level": 5, "XP": 20000, "HitDice": "5d4", "Spells": {1: 2, 2: 2, 3: 1}
            }, {
                "Level": 6, "XP": 40000, "HitDice": "6d4", "Spells": {1: 3, 2: 2, 3: 2}
            }, {
                "Level": 7, "XP": 80000, "HitDice": "7d4", "Spells": {1: 3, 2: 2, 3: 2, 4: 1}
            }, {
                "Level": 8, "XP": 150000, "HitDice": "8d4", "Spells": {1: 3, 2: 3, 3: 2, 4: 2}
            }, {
                "Level": 9, "XP": 300000, "HitDice": "9d4", "Spells": {1: 3, 2: 3, 3: 2, 4: 2, 5: 1}
            }, {
                "Level": 10, "XP": 450000, "HitDice": "9d4+1", "Spells": {1: 4, 2: 3, 3: 3, 4: 2, 5: 2}
            }, {
                "Level": 11, "XP": 600000, "HitDice": "9d4+2", "Spells": {1: 4, 2: 4, 3: 3, 4: 2, 5: 2, 6: 1}
            }, {
                "Level": 12, "XP": 750000, "HitDice": "9d4+3", "Spells": {1: 4, 2: 4, 3: 3, 4: 3, 5: 2, 6: 2}
            }, {
                "Level": 13, "XP": 900000, "HitDice": "9d4+4", "Spells": {1: 4, 2: 4, 3: 4, 4: 3, 5: 2, 6: 2}
            }, {
                "Level": 14, "XP": 1050000, "HitDice": "9d4+5", "Spells": {1: 4, 2: 4, 3: 4, 4: 3, 5: 2, 6: 2}
            }, {
                "Level": 15, "XP": 1200000, "HitDice": "9d4+6", "Spells": {1: 5, 2: 4, 3: 4, 4: 3, 5: 3, 6: 2}
            }, {
                "Level": 16, "XP": 1350000, "HitDice": "9d4+7", "Spells": {1: 5, 2: 5, 3: 4, 4: 3, 5: 3, 6: 2}
            }, {
                "Level": 17, "XP": 1500000, "HitDice": "9d4+8", "Spells": {1: 5, 2: 5, 3: 4, 4: 4, 5: 3, 6: 3}
            }, {
                "Level": 18, "XP": 1650000, "HitDice": "9d4+9", "Spells": {1: 6, 2: 5, 3: 4, 4: 4, 5: 3, 6: 3}
            }, {
                "Level": 19, "XP": 1800000, "HitDice": "9d4+10", "Spells": {1: 6, 2: 5, 3: 5, 4: 4, 5: 3, 6: 3}
            }, {
                "Level": 20, "XP": 1950000, "HitDice": "9d4+11", "Spells": {1: 6, 2: 5, 3: 5, 4: 4, 5: 4, 6: 3}
            }]
        }, {
            "Core": 1,
            "Name": "Thief",
            "Description": "Thieves are those who take what they want or need by stealth, disarming traps and picking locks to get to the gold they crave; or “borrowing” money from pockets, beltpouches, etc. right under the nose of the “mark” without the victim ever knowing. Thieves fight better than Magic-Users but not as well as Fighters. Avoidance of honest work leads Thieves to be less hardy than the other classes, though they do pull ahead of the Magic-Users at higher levels. The Prime Requisite for Thieves is Dexterity; a character must have a Dexterity score of 9 or higher to become a Thief. They may use any weapon, but may not wear metal armor as it interferes with stealthy activities, nor may they use shields of any sort. Leather armor is acceptable, however. Thieves have a number of special abilities, described below. One Turn must generally be spent to use any of these abilities, though the GM may amend this as he or she sees fit. The GM may choose to make any of these rolls on behalf of the player, at his or her option, to help maintain the proper state of uncertainty. Also note that the GM may apply situational adjustments (plus or minus percentage points) as he or she sees fit; for instance, it's obviously harder to climb a wall slick with slime than one that is dry, so the GM might apply a penalty of 20% for the slimy wall.",
            "PrimeRequisite": [ {stat: 'dexterity', min: 9 } ],
            "Armor": "Light",
            "Weapons": "Any",
            "Advancement": [{
                "Level": 1,
                "XP": 0,
                "HitDice": "1d4",
                "ThiefAbilities": {
                    "OpenLocks": 25,
                    "RemoveTraps": 20,
                    "PickPockets": 30,
                    "MoveSilently": 25,
                    "ClimbWalls": 80,
                    "Hide": 10,
                    "Listen": 30
                }
            }, {
                "Level": 2,
                "XP": 1250,
                "HitDice": "2d4",
                "ThiefAbilities": {
                    "OpenLocks": 30,
                    "RemoveTraps": 25,
                    "PickPockets": 35,
                    "MoveSilently": 30,
                    "ClimbWalls": 81,
                    "Hide": 15,
                    "Listen": 34
                }
            }, {
                "Level": 3,
                "XP": 2500,
                "HitDice": "3d4",
                "ThiefAbilities": {
                    "OpenLocks": 35,
                    "RemoveTraps": 30,
                    "PickPockets": 40,
                    "MoveSilently": 35,
                    "ClimbWalls": 82,
                    "Hide": 20,
                    "Listen": 38
                }
            }, {
                "Level": 4,
                "XP": 5000,
                "HitDice": "4d4",
                "ThiefAbilities": {
                    "OpenLocks": 40,
                    "RemoveTraps": 35,
                    "PickPockets": 45,
                    "MoveSilently": 40,
                    "ClimbWalls": 83,
                    "Hide": 25,
                    "Listen": 42
                }
            }, {
                "Level": 5,
                "XP": 10000,
                "HitDice": "5d4",
                "ThiefAbilities": {
                    "OpenLocks": 45,
                    "RemoveTraps": 40,
                    "PickPockets": 50,
                    "MoveSilently": 45,
                    "ClimbWalls": 84,
                    "Hide": 30,
                    "Listen": 46
                }
            }, {
                "Level": 6,
                "XP": 20000,
                "HitDice": "6d4",
                "ThiefAbilities": {
                    "OpenLocks": 50,
                    "RemoveTraps": 45,
                    "PickPockets": 55,
                    "MoveSilently": 50,
                    "ClimbWalls": 85,
                    "Hide": 35,
                    "Listen": 50
                }
            }, {
                "Level": 7,
                "XP": 40000,
                "HitDice": "7d4",
                "ThiefAbilities": {
                    "OpenLocks": 55,
                    "RemoveTraps": 50,
                    "PickPockets": 60,
                    "MoveSilently": 55,
                    "ClimbWalls": 86,
                    "Hide": 40,
                    "Listen": 54
                }
            }, {
                "Level": 8,
                "XP": 75000,
                "HitDice": "8d4",
                "ThiefAbilities": {
                    "OpenLocks": 60,
                    "RemoveTraps": 55,
                    "PickPockets": 65,
                    "MoveSilently": 60,
                    "ClimbWalls": 87,
                    "Hide": 45,
                    "Listen": 58
                }
            }, {
                "Level": 9,
                "XP": 150000,
                "HitDice": "9d4",
                "ThiefAbilities": {
                    "OpenLocks": 65,
                    "RemoveTraps": 60,
                    "PickPockets": 70,
                    "MoveSilently": 65,
                    "ClimbWalls": 88,
                    "Hide": 50,
                    "Listen": 62
                }
            }, {
                "Level": 10,
                "XP": 225000,
                "HitDice": "9d4+2",
                "ThiefAbilities": {
                    "OpenLocks": 68,
                    "RemoveTraps": 63,
                    "PickPockets": 74,
                    "MoveSilently": 68,
                    "ClimbWalls": 89,
                    "Hide": 53,
                    "Listen": 65
                }
            }, {
                "Level": 11,
                "XP": 300000,
                "HitDice": "9d4+4",
                "ThiefAbilities": {
                    "OpenLocks": 71,
                    "RemoveTraps": 66,
                    "PickPockets": 78,
                    "MoveSilently": 71,
                    "ClimbWalls": 90,
                    "Hide": 56,
                    "Listen": 68
                }
            }, {
                "Level": 12,
                "XP": 375000,
                "HitDice": "9d4+6",
                "ThiefAbilities": {
                    "OpenLocks": 74,
                    "RemoveTraps": 69,
                    "PickPockets": 82,
                    "MoveSilently": 74,
                    "ClimbWalls": 91,
                    "Hide": 59,
                    "Listen": 71
                }
            }, {
                "Level": 13,
                "XP": 450000,
                "HitDice": "9d4+8",
                "ThiefAbilities": {
                    "OpenLocks": 77,
                    "RemoveTraps": 72,
                    "PickPockets": 86,
                    "MoveSilently": 77,
                    "ClimbWalls": 92,
                    "Hide": 62,
                    "Listen": 74
                }
            }, {
                "Level": 14,
                "XP": 525000,
                "HitDice": "9d4+10",
                "ThiefAbilities": {
                    "OpenLocks": 80,
                    "RemoveTraps": 75,
                    "PickPockets": 90,
                    "MoveSilently": 80,
                    "ClimbWalls": 93,
                    "Hide": 65,
                    "Listen": 77
                }
            }, {
                "Level": 15,
                "XP": 600000,
                "HitDice": "9d4+12",
                "ThiefAbilities": {
                    "OpenLocks": 83,
                    "RemoveTraps": 78,
                    "PickPockets": 94,
                    "MoveSilently": 83,
                    "ClimbWalls": 94,
                    "Hide": 68,
                    "Listen": 80
                }
            }, {
                "Level": 16,
                "XP": 675000,
                "HitDice": "9d4+14",
                "ThiefAbilities": {
                    "OpenLocks": 84,
                    "RemoveTraps": 79,
                    "PickPockets": 95,
                    "MoveSilently": 85,
                    "ClimbWalls": 95,
                    "Hide": 69,
                    "Listen": 83
                }
            }, {
                "Level": 17,
                "XP": 750000,
                "HitDice": "9d4+16",
                "ThiefAbilities": {
                    "OpenLocks": 85,
                    "RemoveTraps": 80,
                    "PickPockets": 96,
                    "MoveSilently": 87,
                    "ClimbWalls": 96,
                    "Hide": 70,
                    "Listen": 86
                }
            }, {
                "Level": 18,
                "XP": 825000,
                "HitDice": "9d4+18",
                "ThiefAbilities": {
                    "OpenLocks": 86,
                    "RemoveTraps": 81,
                    "PickPockets": 97,
                    "MoveSilently": 89,
                    "ClimbWalls": 97,
                    "Hide": 71,
                    "Listen": 89
                }
            }, {
                "Level": 19,
                "XP": 900000,
                "HitDice": "9d4+20",
                "ThiefAbilities": {
                    "OpenLocks": 87,
                    "RemoveTraps": 82,
                    "PickPockets": 98,
                    "MoveSilently": 91,
                    "ClimbWalls": 98,
                    "Hide": 72,
                    "Listen": 92
                }
            }, {
                "Level": 20,
                "XP": 975000,
                "HitDice": "9d4+22",
                "ThiefAbilities": {
                    "OpenLocks": 88,
                    "RemoveTraps": 83,
                    "PickPockets": 99,
                    "MoveSilently": 93,
                    "ClimbWalls": 99,
                    "Hide": 73,
                    "Listen": 95
                }
            }]
        }];
    }

    getClassesCore() {
        return this.getClasses().filter(function (obj) {
            return obj.Core === 1;
        });
    }

    getClassesNames() {
        return this.getClasses().map(function (obj) {
            return obj.Name;
        });
    }

    getClassesNamesCore() {
        return this.getClasses().map((obj) => {
            return obj.Name;
        });
    }

    getClassByName(className) {
        return this.getClasses().filter(function (obj) {
            return obj.Name.toLowerCase() === className.toLowerCase();
        })[0];
    }
}

module.exports = ClassesData;

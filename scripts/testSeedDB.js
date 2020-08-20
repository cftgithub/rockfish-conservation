const mongoose = require('mongoose');
const db = require("../models");

mongoose.connect(
  "mongodb://heroku_4txb6x7g:jhth8m1qvf3sa9b3na29ur6rb1@ds213199.mlab.com:13199/heroku_4txb6x7g"||
    "mongodb://localhost/creelDB"
);

const creelSeed = [
    {
        species: "Black Rockfish",
        length: "15",
        dateCaught: new Date(Date.now()),
        locationCaught: "Patrick's Point"
    },
    {
        species: "Black Rockfish",
        length: "12",
        dateCaught: new Date(Date.now()),
        locationCaught: "Patrick's Point"
    },
    {
        species: "Black Rockfish",
        length: "17",
        dateCaught: new Date(Date.now()),
        locationCaught: "Patrick's Point"
    },
    {
        species: "Black Rockfish",
        length: "9",
        dateCaught: new Date(Date.now()),
        locationCaught: "Patrick's Point"
    },
    {
        species: "China Rockfish",
        length: "10",
        dateCaught: new Date(Date.now()),
        locationCaught: "Patrick's Point"
    },
    {
        species: "Blue Rockfish",
        length: "13",
        dateCaught: new Date(Date.now()),
        locationCaught: "Trinidad Pier"
    },
    {
        species: "Gopher Rockfish",
        length: "11",
        dateCaught: new Date(Date.now()),
        locationCaught: "Trinidad Pier"
    },
    {
        species: "Canary Rockfish",
        length: "20",
        dateCaught: new Date(Date.now()),
        locationCaught: "Long Beach"
    },
    {
        species: "Olive Rockfish",
        length: "18",
        dateCaught: new Date(Date.now()),
        locationCaught: "Long Beach"
    },
    {
        species: "Olive Rockfish",
        length: "15",
        dateCaught: new Date(Date.now()),
        locationCaught: "Long Beach"
    },
    {
        species: "Flag Rockfish",
        length: "13",
        dateCaught: new Date(Date.now()),
        locationCaught: "Long Beach"
    },
    {
        species: "Flag Rockfish",
        length: "12",
        dateCaught: new Date(Date.now()),
        locationCaught: "Fisherman's Warf"
    },
    {
        species: "Vermilion Rockfish",
        length: "18",
        dateCaught: new Date(Date.now()),
        locationCaught: "Fisherman's Warf"
    },
    {
        species: "Black Rockfish",
        length: "16",
        dateCaught: new Date(Date.now()),
        locationCaught: "Fisherman's Warf"
    },
    {
        species: "Black Rockfish",
        length: "10",
        dateCaught: new Date(Date.now()),
        locationCaught: "Fisherman's Warf"
    },
    {
        species: "Copper Rockfish",
        length: "11",
        dateCaught: new Date(Date.now()),
        locationCaught: "Fisherman's Warf"
    }
];

db.TestCreel
    .remove({})
    .then(() => db.TestCreel.collection.insertMany(creelSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });




const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let creelData = new Schema({
    species: {
        type:String
    },
    length: {
        type:Number
    },
    dateCaught: {
        type:Date
    },
    locationCaught: {
        type:String
    }
});

module.exports = mongoose.model("creelData",creelData);



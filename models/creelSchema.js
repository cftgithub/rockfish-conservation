const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const creelSchema = new Schema({
    _id: { type: String},
    species:  { type: String},
    length: {type: Number, min: 1 , max: 4 },
    dateCaught: {type: Date},
    locationCaught: {type: String}
});

const Creel = mongoose.model("Creel", creelSchema);

module.exports = Creel;
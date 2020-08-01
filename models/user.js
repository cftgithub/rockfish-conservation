const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String },
    passHash: { type: String },
    status: { type: String }
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
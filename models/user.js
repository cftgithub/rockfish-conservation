const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
const userSchema = new Schema({
    username: { type: String },
    passHash: { type: String },
    status: { type: String }
=======
const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
>>>>>>> b3a6e1922ec084420e7727f250546afe0e2be1c0
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
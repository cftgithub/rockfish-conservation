const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
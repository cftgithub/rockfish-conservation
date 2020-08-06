const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.confPassword = !isEmpty(data.confPassword) ? data.confPassword : "";

    if (Validator.isEmpty(data.email)) {
        errors.email = "UnforTUNAtely, an e-mail is required.";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "That e-mail is net going to work.";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "You need a password to FINish registering.";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Your password cod be better (at least 6 characters long)";
    }

    if (!Validator.equals(data.password, data.confPassword)) {
        errors.confPassword = "There's something fishy with those passwords.";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}
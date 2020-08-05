const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.email)) {
        errors.email = "Stay clam and just enter a valid e-mail.";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "That e-mail smelt bad.";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "You're still on the hook to provide a password.";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
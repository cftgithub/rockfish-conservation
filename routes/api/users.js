const router = require("express").Router();
const usersController = require("../../controller/usersController");

router.route("/register")
    .get(usersController.findAll)    
    .post(usersController.create);
    
module.exports = router;
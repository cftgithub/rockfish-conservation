const router = require("express").Router();
const authController = require("../../controller/authController");

router
    .route("/:id")
    .get(authController.findById)
    .put(authController.update)
    .delete(authController.remove);

module.exports = router;

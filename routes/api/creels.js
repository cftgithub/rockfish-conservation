const router = require("express").Router();
const creelController = require("../../controller/creelController");


router.route("/").get(creelController.findAll).post(creelController.create);

router
  .route("/:id")
  .get(creelController.findById)
  .put(creelController.update)
  .delete(creelController.remove);

module.exports = router;

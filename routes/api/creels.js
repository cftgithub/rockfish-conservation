const router = require("express").Router();
const creelController = require("../../controller/creelController");
const testCreelController = require("../../controller/testCreelController")

router.route("/").get(creelController.findAll).post(creelController.create);


router
  .route("/:id")
  .get(creelController.findById)
  .put(creelController.update)
  .delete(creelController.remove)
  .post(creelController.create);


  router.route("/test").get(testCreelController.findAll)
  
module.exports = router;

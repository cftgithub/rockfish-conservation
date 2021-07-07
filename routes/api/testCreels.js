const router = require("express").Router();
const creelController = require("../../controller/creelController");
const testCreelController = require("../../controller/testCreelController")

router.route("/").get(testCreelController.findAll) 


   
  
module.exports = router;

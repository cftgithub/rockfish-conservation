const router = require("express").Router();
const creelRoutes = require("./creels");
const userRoutes = require("./users");
const testCreelsRoutes = require("./testCreels")

router.use("/creels", creelRoutes);
router.use("/users", userRoutes);
router.use("/testCreels", testCreelsRoutes);
module.exports = router;

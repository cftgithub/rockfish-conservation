const router = require("express").Router();
const creelRoutes = require("./creels");
const userRoutes = require("./users");

router.use("/creels", creelRoutes);
router.use("/user", userRoutes);

module.exports = router;

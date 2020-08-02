const router = require("express").Router();
const creelRoutes = require("./creels");
const userRoutes = require("./users");

router.use("/creels", creelRoutes);
router.use("/users", userRoutes);

module.exports = router;

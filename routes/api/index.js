const router = require("express").Router();
const creelRoutes = require("./creels");
// const authRoutes = require("./login");

router.use("/creels", creelRoutes);
// router.use("/users", authRoutes);

module.exports = router;

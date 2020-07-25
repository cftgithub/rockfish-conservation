const router = require("express").Router();
const creelRoutes = require("./creels");

router.use("/creels", creelRoutes);

module.exports = router;

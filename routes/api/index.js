const router = require("express").Router();
const userRoutes = require("./user.js");
const path = require("path");

// user routes
router.use("/user", userRoutes);


module.exports = router;

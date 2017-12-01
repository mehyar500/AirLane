const router = require("express").Router();
const userRoutes = require("./user.js");
const aircraftRoutes = require("./aircraft.js");
const path = require("path");

// user routes
router.use("/user", userRoutes);

//aircraft routes
router.use("/aircraft", aircraftRoutes);

module.exports = router;

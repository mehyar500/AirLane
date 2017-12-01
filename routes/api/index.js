const router = require("express").Router();
const userRoutes = require("./user.js");
const aircraftRoutes = require("./aircraft.js");
const resevationRoutes = require("./resevation.js");
const path = require("path");

// user routes
router.use("/user", userRoutes);

//aircraft routes
router.use("/aircraft", aircraftRoutes);

//resevation routes
router.use("/resevation", resevationRoutes);

module.exports = router;

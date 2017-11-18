const router = require("express").Router();
const userRoutes = require("./user.js");

// Saved routes
router.use("/user", userRoutes);

module.exports = router;

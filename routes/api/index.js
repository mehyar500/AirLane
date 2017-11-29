const app = require("express").Router();
const userRoutes = require("./user.js");
const path = require("path");

// user routes
app.use("/user", userRoutes);


module.exports = app;

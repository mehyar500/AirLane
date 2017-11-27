const app = require("express").Router();
const userRoutes = require("./user.js");
const path = require("path");
const db = require("../models");
const bcrypt = require("bcrypt");
const session = require("express-session");
const authenticationMiddleware = require("../utils/authenticationMiddleware");
const saltRounds = 10;

// user routes
app.use("/user", userRoutes);

module.exports = app;

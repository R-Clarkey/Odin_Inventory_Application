const express = require("express")
const router = express.Router()
const check = require("express-validator");
const checkFunction = check.check;

const developersControllers = require("../controllers/developersController")
router.get("/", developersControllers.getDevelopers)

module.exports = router

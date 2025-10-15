const express = require("express")
const router = express.Router()
const check = require("express-validator");
const checkFunction = check.check;

const categoriesController = require("../controllers/categoriesController.js")
router.get("/",  categoriesController.getCategories)

module.exports = router
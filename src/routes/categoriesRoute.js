const express = require("express");
const router = express.Router()
const categoriesController = require("../controllers/categoriesController")

router.get("/", categoriesController.getAllCategories)
router.get("/new", categoriesController.getNewCategory)
router.post("/new", categoriesController.postNewCategory)
router.get("/:id", categoriesController.getById)

module.exports = router
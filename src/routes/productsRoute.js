const express = require("express");
const router = express.Router()
const productsController = require("../controllers/productsController")

router.get("/", productsController.getAllProducts)
router.get("/new", productsController.getNewProduct)
router.post("/new", productsController.postNewProduct)
router.post("/:id/delete", productsController.postDeleteProduct)
router.get("/:id", productsController.getById)

module.exports = router
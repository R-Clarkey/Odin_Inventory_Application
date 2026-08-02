const db = require("../db/queries");

async function getAllProducts(req, res) {
  const products = await db.getAllProducts()
  console.log("products: ", products)
  res.render("products", {products: products})
}

async function getById(req, res){
    const product = await db.getProduct(req.params.id)
    console.log(product)
    res.render("product", {product: product})
}

module.exports = {
    getAllProducts,
    getById
};

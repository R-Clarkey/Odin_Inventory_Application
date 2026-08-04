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

async function getNewProduct(req, res) {
    const categories = await db.getAllCategories()
    res.render("newProduct", {categories: categories})
}

async function postNewProduct(req, res) {
    result = await db.postNewProduct(req.body.product_name, req.body.product_price, req.body.product_quantity, req.body.category_id)
    res.redirect("/products")
}

async function postDeleteProduct(req, res) {
    result = await db.postDeleteProduct(req.params.id)
    res.redirect("/products")
}

module.exports = {
    getAllProducts,
    getById,
    getNewProduct,
    postNewProduct,
    postDeleteProduct
};

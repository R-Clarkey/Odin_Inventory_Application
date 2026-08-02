const db = require("../db/queries");

async function getAll(req, res) {
  const categories = await db.getAllCategories()
  const products = await db.getAllProducts()
  res.render("index", {products: products, categories: categories})
}


module.exports = {
    getAll,
    
};

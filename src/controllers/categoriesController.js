const db = require("../db/queries");

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories()
  console.log("categories: ", categories)
  res.render("categories", {categories: categories})
}

async function getById(req, res) {
  const category = await db.getProductsOfCategory(req.params.id)
  const name = await db.getCategoryName(req.params.id)
  console.log("Category", category)
  console.log("Name", name)
  res.render("category", {category: category, name: name})
}

async function getNewCategory(req, res) {
  const categories = await db.getAllCategories()
  res.render("newCategory", {categories: categories})
}

async function postNewCategory(req, res) {
  result = await db.postNewCategory(req.body.category_name)
  res.redirect("/categories")
}

module.exports = {
  getAllCategories,
  getById,
  getNewCategory,
  postNewCategory
};

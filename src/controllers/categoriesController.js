const db = require("../db/queries");

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories()
  console.log("categories: ", categories)
  res.render("categories", {categories: categories})
}

module.exports = {
    getAllCategories,

};

const db = require("../db/queries");

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();
  console.log("categories: ", categories);
  res.render("index", {categories: categories})
}


module.exports = {
    getAllCategories,
};

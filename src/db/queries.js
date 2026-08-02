const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}
async function getAllProducts() {
  const { rows } = await pool.query("SELECT * FROM products");
  return rows;
}

async function getProduct(id) {
  const { rows } = await pool.query(
    "SELECT * FROM products WHERE product_id = $1;",
    [id]
  );
  return rows[0] ?? null;
}


module.exports = {
  getAllCategories,
  getAllProducts,
  getProduct
};

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

async function getProductsOfCategory(id) {
  const { rows } = await pool.query(
    "SELECT * FROM products WHERE category_id = $1;",
    [id]
  );
  return rows ?? null;
}

async function getCategoryName(id) {
  const { rows } = await pool.query(
    "SELECT category_name FROM categories WHERE category_id = $1;",
    [id]
  );
  return rows[0] ?? null;
}

async function postNewProduct(product_name, product_price, product_quantity, category_id) {
  const { rows } = await pool.query(
    `
    INSERT INTO products (product_name, product_price, product_quantity, category_id)
    VALUES ($1, $2, $3, $4)
    RETURNING product_id, product_name, product_price, product_quantity, category_id;
    `,
    [product_name, product_price, product_quantity, category_id]
  );

  return rows[0];
}

async function postDeleteProduct(id) {
  const { rows } = await pool.query("DELETE FROM products WHERE product_id = $1;", [id]);
  return rows[0];
}

async function postNewCategory(category_name) {
  const { rows } = await pool.query(
    `INSERT INTO categories (category_name) 
    values ($1) RETURNING category_name`, [category_name]);

  return rows[0]
}

module.exports = {
  getAllCategories,
  getAllProducts,
  getProduct,
  getProductsOfCategory,
  getCategoryName,
  postNewProduct,
  postDeleteProduct,
  postNewCategory
};

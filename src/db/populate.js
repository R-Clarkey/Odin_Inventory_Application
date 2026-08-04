const dotenv = require("dotenv");
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  category_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category_name VARCHAR ( 255 )
);

INSERT INTO categories (category_name) 
VALUES
  ('Fruit and Veg'),
  ('Cooked Meat'),
  ('Meat');

CREATE TABLE IF NOT EXISTS products (
    product_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    product_name VARCHAR ( 255 ),
    product_price FLOAT,
    product_quantity BIGINT,
    category_id BIGINT
);

INSERT INTO products (product_name, product_price, product_quantity, category_id)
VALUES
  ('Banana', 0.35, 20, 1),
  ('Tomato', 0.80, 30, 1),
  ('Carrot', 0.25, 100, 1),

  ('Roast Chicken', 7.99, 12, 2),
  ('Pork Sausage (cooked)', 4.50, 25, 2),

  ('Chicken Breast', 6.25, 18, 3),
  ('Ground Beef', 5.49, 22, 3),
  ('Lamb Chops', 12.30, 10, 3);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

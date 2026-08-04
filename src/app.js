const path = require("node:path");
const express = require("express");
const dotenv = require("dotenv");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const indexRouter = require("./routes/indexRoute");
app.use("/", indexRouter);

const categoriesRouter = require("./routes/categoriesRoute");
app.use("/categories", categoriesRouter);

const productsRouter = require("./routes/productsRoute");
app.use("/products", productsRouter);

app.listen(process.env.PORT || 3000, (error) => {
  if (error) throw error;
  console.log(
    `My first Express app - listening on port http://127.0.0.1:${process.env.PORT || 3000} !`
  );
});

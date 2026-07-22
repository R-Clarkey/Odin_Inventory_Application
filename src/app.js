const path = require("node:path");
const express = require("express");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
const { loadEnvFile } = require('node:process');
loadEnvFile();

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port http://127.0.0.1:${process.env.PORT || 3000} !`);
});

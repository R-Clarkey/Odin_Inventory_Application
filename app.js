const path = require("node:path")
const express = require("express")
const app = express()
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))
const dotenv = require('dotenv');
dotenv.config();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })) 

const gamesRoute = require("./routes/gamesRoute")
app.use("/games", gamesRoute)

const developersRoute = require("./routes/developersRoute")
app.use("/developers", developersRoute)

const categoriesRoute = require("./routes/categoriesRoute")
app.use("/categories", categoriesRoute)

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(process.env.PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`My first Express app - listening on port ${process.env.PORT}!`)
})

const express = require("express")
const router = express.Router()
const check = require("express-validator");
const checkFunction = check.check;

const gamesController = require("../controllers/gamesController")
router.get("/",  gamesController.getGames)
router.get("/game", gamesController.getGame)

module.exports = router
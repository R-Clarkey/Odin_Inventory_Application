const check = require("express-validator");
const { validationResult } = check;
const dotenv = require('dotenv')
const db = require("../db/queries")
dotenv.config()

async function getGames(req,res){
    let games = await db.getAllGames()
    res.render("games", {games:games})
}

async function getGame(req,res){
    let gameID = req.query.game_id
    let game, developers, categories = await db.getGame(gameID)
    res.render("game", {game:game})
}

module.exports = {
    getGames,
    getGame,
}
const check = require("express-validator");
const { validationResult } = check;
const dotenv = require('dotenv')
dotenv.config()

async function getGames(req,res){
    res.render("games")
}

module.exports = {
    getGames,
}
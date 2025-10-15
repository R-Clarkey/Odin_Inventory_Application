const pool = require("./pool")

async function getAllGames(){
    const {rows} = await pool.query("SELECT * FROM games")
    console.log("Games",rows)
    return rows
}

async function getGame(gameID){
    const game = await pool.query("SELECT * FROM games WHERE game_id = $1", [`${gameID}`])
    const developers = await pool.query("SELECT * FROM developers")
    const categories = await pool.query("SELECT * FROM categories")
    console.log(game.rows, developers.rows, categories.rows)
    return game.rows, developers.rows, categories.rows
}

module.exports = {
    getAllGames,
    getGame
}
const check = require("express-validator");
const { validationResult } = check;
const dotenv = require('dotenv')
dotenv.config()

async function getDevelopers(req,res){
    res.render("developers")
} 

module.exports = {
    getDevelopers
}
const bcrypt = require('bcrypt');
const User = require('../models/users');
require('dotenv').config();


//to check whether string is valid or not
function isStringInvalid(string) {
    if (string === undefined || string === 0) {
        return true
    } else {
        return false
    }
}

//signup user
exports.signup =async (req,res,next)=>{
    const {username,email,password} = req.body;
    console.log(username,email,password);
} 
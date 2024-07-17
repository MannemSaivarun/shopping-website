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
exports.signup = async (req, res, next) => {
    try {
        const { username, email, password, role } = req.body;
    console.log("backend signup log", username, email, password, role);
    //checking whether username,email,password are invalid or not
    if (isStringInvalid(username) || isStringInvalid(email) || isStringInvalid(password)) {
        return res.status(400).json({ error: "bad parameters: all fields are required" });
    }
    //checking whether the user already exists or not
    const existingUser = await User.findAll({
        where:{
            email:email,
            role:role
        }
    })

    console.log("existing user", existingUser);

    if(existingUser.length>0){
        console.log("user already exists",existingUser);
        return res.status(409).json({error:"conflict: user already exists"});
    }
    
    const saltrounds = parseInt(process.env.SALT_ROUNDS, 10);
    
    bcrypt.hash(password, saltrounds, async (err,hash)=>{
        
        await User.create({
            username:username,
            email:email,
            password:hash,
            role:role
        })
        return res.status(201).json({message:"Signup successfull"});
    })
    } catch (error) {
        return res.status(400).json({error:error});
    }




} 
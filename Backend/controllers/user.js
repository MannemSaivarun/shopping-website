const bcrypt = require('bcrypt');
const User = require('../models/users');
require('dotenv').config();
const jwt = require('jsonwebtoken');


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
        //console.log("backend signup log", username, email, password, role);
        //checking whether username,email,password are invalid or not
        if (isStringInvalid(username) || isStringInvalid(email) || isStringInvalid(password)) {
            return res.status(400).json({ error: "bad parameters: all fields are required" });
        }
        //checking whether the user already exists or not
        const existingUser = await User.findAll({
            where: {
                email: email,
                role: role
            }
        })

        console.log("existing user", existingUser);

        if (existingUser.length > 0) {
            console.log("user already exists", existingUser);
            return res.status(409).json({ error: "conflict: user already exists" });
        }

        const saltrounds = parseInt(process.env.SALT_ROUNDS, 10);

        bcrypt.hash(password, saltrounds, async (err, hash) => {

            await User.create({
                username: username,
                email: email,
                password: hash,
                role: role
            })
            return res.status(201).json({ message: "Signup successfull" });
        })
    } catch (error) {
        return res.status(400).json({ error: error });
    }




}

//login user

function generateAcessToken(id,name){
    return jwt.sign({userId : id, name : name },process.env.SECRET_TOKEN_KEY)
}  

exports.login = async (req, res, next) => {
    try {
        //console.log(req.body, "this is lopgin req.body");
        const { email, password, role } = req.body;
        if (isStringInvalid(role) || isStringInvalid(email) || isStringInvalid(password)) {
            return res.status(400).json({ error: "invalid parameters" });
        }
        const user = await User.findAll({
            where: {
                email: email,
                role: role
            }
        })
        // const userId = user[0].id;
        //console.log('user details',user);

        if (user.length > 0) {
            const storedHash = user[0].password
            bcrypt.compare(password, storedHash, (err, result) => {
                //console.log("ENTERED")
                if (err) {
                    // Handle the error
                    res.status(500).json({ success: false, message: "server error" })
                } else if (result === true) {
                    // Passwords match, grant access to the user
                    res.status(200).json({ success: true, message: "User loged in succefully", token: generateAcessToken(user[0].id, user[0].name, user[0].role) })
                } else {
                    // Passwords do not match, deny access
                    res.status(401).json({ success: false, message: "invalid parameters" })
                }
            });
        } else {
            res.status(401).json({ success: false, message: "invalid parameters" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
}
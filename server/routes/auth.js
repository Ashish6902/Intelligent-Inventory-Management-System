const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'this_is_secret_key';//add in enviorment variable

// Route 1:Create user using: POST "api/auth/createuser". Doesn't require authentication 
router.post('/createUser', [
    body('email').isEmail(),
    body('name').isLength({ min: 3 }),
    body('password').isLength({ min: 5 }),
    body('role').exists(),
    body('phone').isLength({min:10})
], async (req, res) => {
    //check validations
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
        return res.status(400).json({ success, errors: [{ msg: 'Email already exists' }] });
    }
    //hashing Password
    const salt = await bcrypt.genSalt(10);
    const SecPass = await bcrypt.hash(req.body.password, salt);
    // Create a new user
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            phone:req.body.phone,
            password: SecPass
        });
    
        const data = {
            id: newUser.id
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken , Succes:"OK", newUser });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }    
});

//Route 2:Authentication a user using post : "/api/auth/login". Doesn't require authentication 
router.post('/login', [
    body('email','enter valid email').isEmail(),
    body('password','password cannot be balnk').exists(),
], async (req, res) => {
     //check validations
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
     }

     const { email, password } = req.body;
     try{
        let user =  await User.findOne({ email});
        if(!user){
            return res.status(400).json("Login with correct Credentials");
        }
        const comparePassword = await bcrypt.compare(password,user.password);
        if(!comparePassword){
            return res.status(400).json("Login with correct Credentials");
        }
        const data = {
            id: user.id
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken, Succes:"OK",user  });
     }catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }    
});

module.exports = router;
const express = require('express');
const User = require("../models/User")
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const JWT_SECRET = "nikhilisagood$boy";

// Create a user using: POST "/api/auth/createuser". No login required.
router.post("/createuser", [
  body('name', "Enter a valid name").isLength({ min: 5 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  // If there are errors, return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // check whether the user with email exist already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    
    // Create a new user
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    });
    // .then(user => res.json(user))
    // .catch(err=> {console.log(err)
    // res.json({error: "Please enter unique value for email", message: err.message})})
    const data = {
      user:{
        id : user.id
      }
    }

    const authtoken = jwt.sign(data, JWT_SECRET);
    // console.log(authtoken);

    // res.json(user)
    res.json({authtoken})
    // Catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
})

module.exports = router
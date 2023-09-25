const asyncHandler = require("express-async-handler")
const User = require('../models/userModel');
const generateToken = require("../utils/generateToken");

const loginUser = asyncHandler(async (req, res) => {
    let userExists = false; // Initialize the variable as false

    
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            userExists:true
        })
    } else {
        userExists:false,
        res.status(400)
        throw new Error("Invalid Email or Password ")
    }
})


const registerUser = async (req, res) => {
    const { name, email, password, isStudent } = req.body;
    let userExists = false; // Initialize the variable as false
  
    try {
      const existingUser = await User.findOne({ email });
  
      if (!existingUser) {
        userExists = true; // If user does not exist, set the variable to true
      } else {
        throw new Error("User Already Exists");
      }
  
      const user = await User.create({
        name,
        email,
        password
      });
  
      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
          userExists:true
        });
      } else {
        res.status(400).json({ message: "Error Occurred" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message, userExists });
    }
  };
  


module.exports = { registerUser, loginUser }
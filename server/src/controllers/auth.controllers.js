const { registerUser, loginUser } = require("../services/auth.services")

// Register Controller
const register = async (req, res) => {
  const { username, email, password } = req.body

  try {
    const { newUser, token } = await registerUser(username, email, password)
    res.status(201).json({
      success: true,
      data: newUser,
      token,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    })
  }
}

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const { user, token } = await loginUser(email, password)
    res.status(201).json({
      success: true,
      data: user,
      token,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    })
  }
}

module.exports = { register, login }

module.exports = { register, login }

//! CONTROLLER Include SERVICES
// const AuthSchema = require("../models/auth.model")
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcryptjs")

// const register = async (req, res) => {
//   const { username, email, password } = req.body

//   try {
//     const existingUser = await AuthSchema.findOne({ email })
//     if (existingUser) {
//       return res.status(401).json({ error: "User already exists" })
//       //throw new Error("User already exists")
//     } else if (password.length < 6) {
//       return res
//         .status(401)
//         .json({ error: "Password must be at least 6 characters" })
//     } else if (!isEmail(email)) {
//       return res.status(401).json({ error: "Invalid email" })
//     }
//     // Hash the password before saving it to the database
//     const salt = await bcrypt.genSalt(12)
//     const hashedPassword = await bcrypt.hash(password, salt)

//     const newUser = await AuthSchema.create({
//       username,
//       email,
//       password: hashedPassword,
//     })
//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     })
//     res.status(201).json({
//       success: true,
//       data: newUser,
//       token,
//     })
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       message: err.message,
//     })
//   }
// }

// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body
//     const user = await AuthSchema.findOne(email)
//     if (!user) {
//       return res.status(404).json({ error: "User not found" })
//     }
//     const passwordMatch = await bcrypt.compare(password, user.password)
//     if (!passwordMatch) {
//       return res.status(401).json({ error: "Invalid credentials" })
//     }
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     })
//     res.status(201).json({
//       success: true,
//       data: user,
//       token,
//     })
//     // Update the user's status to "online"
//     user.status = "online"
//     await user.save()
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       message: err.message,
//     })
//   }
// }

// const isEmail = emailAddress => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   if (emailAddress.match(emailRegex)) {
//     return true
//   } else {
//     return false
//   }
// }

// module.exports = { register, login }

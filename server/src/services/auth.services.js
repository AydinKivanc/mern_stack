const AuthSchema = require("../models/auth.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

// Register User Service
const registerUser = async (username, email, password) => {
  const existingUser = await AuthSchema.findOne({ email })
  if (existingUser) {
    throw new Error("User already exists")
  }

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters")
  }

  if (!isEmail(email)) {
    throw new Error("Invalid email")
  }

  const salt = await bcrypt.genSalt(12)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = await AuthSchema.create({
    username,
    email,
    password: hashedPassword,
  })

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  })

  return { newUser, token }
}

// Login User Service
const loginUser = async (email, password) => {
  const user = await AuthSchema.findOne({ email })
  if (!user) {
    throw new Error("User not found")
  }

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) {
    throw new Error("Invalid password")
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  })

  user.status = "online"
  await user.save()

  return { user, token }
}

// Email Validation
const isEmail = emailAddress => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(emailAddress)
}

module.exports = {
  registerUser,
  loginUser,
}

// const AuthSchema = require("../models/auth.model")
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcryptjs")

// //! REGISTER USER
// const registerUser = async (username, email, password) => {
//   const existingUser = await AuthSchema.findOne({ email })
//   if (existingUser) {
//     return res.status(401).json({ error: "User already exists" })
//   } else if (password.length < 6) {
//     return res
//       .status(401)
//       .json({ error: "Password must be at least 6 characters" })
//   } else if (!isEmail(email)) {
//     return res.status(401).json({ error: "Invalid email" })
//   }

//   const salt = await bcrypt.genSalt(12)
//   const hashedPassword = await bcrypt.hash(password, salt)

//   const newUser = await AuthSchema.create({
//     username,
//     email,
//     password: hashedPassword,
//   })

//   const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   })

//   return { newUser, token }
// }
// //! LOGIN USER
// const loginUser = async (email, password) => {
//   const user = await AuthSchema.findOne({ email })
//   if (!user) {
//     throw new Error("User not found")
//   }

//   const passwordMatch = await bcrypt.compare(password, user.password)
//   if (!passwordMatch) {
//     throw new Error("Invalid credentials")
//   }

//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   })

//   user.status = "online"
//   await user.save()

//   return { user, token }
// }

// //! EMAIL Validation
// const isEmail = emailAddress => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   return emailRegex.test(emailAddress)
// }

// module.exports = {
//   registerUser,
//   loginUser,
// }

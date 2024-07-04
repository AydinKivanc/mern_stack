const express = require("express")
const {
  getAllPosts,
  createPost,
  getAPost,
  updatePost,
  deletePost,
} = require("../../controllers/post.controllers")

const router = express.Router()

router.get("/getAllPosts", getAllPosts)
router.get("/getAPost", getAPost)
router.post("/create", createPost)
router.patch("/updatePost/:id", updatePost)
router.delete("/deletePost/:id", deletePost)

module.exports = router

// const express = require("express")
// const {
//   getAllPosts,
//   createPost,
//   getAPost,
//   updatePost,
//   deletePost,
// } = require("../../controllers/post.controllers")

// const router = express.Router()

// router.get("/", getAllPosts)
// router.get("/:id", getAPost)
// router.post("/", createPost)
// router.patch("/:id", updatePost)
// router.delete("/:id", deletePost)

// module.exports = router

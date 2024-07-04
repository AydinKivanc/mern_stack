const postService = require("../services/post.services")

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts()
    res.status(200).json(posts)
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch posts", error: error.message })
  }
}

exports.createPost = async (req, res) => {
  try {
    const newPost = req.body
    const createdPost = await postService.createPost(newPost)
    res.status(201).json(createdPost)
  } catch (error) {
    console.error(error) // Log the error to see what went wrong
    res
      .status(500)
      .json({ message: "Failed to create post", error: error.message })
  }
}

exports.getAPost = async (req, res) => {
  try {
    const postId = req.params.id
    const post = await postService.getAPost(postId)
    if (!post) {
      return res.status(404).json({ message: "Post not found" })
    }
    res.status(200).json(post)
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch post", error: error.message })
  }
}

exports.updatePost = async (req, res) => {
  try {
    const postId = req.params.id
    const updatedPost = req.body
    const post = await postService.updatePost(postId, updatedPost)
    if (!post) {
      return res.status(404).json({ message: "Post not found" })
    }
    res.status(200).json(post)
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update post", error: error.message })
  }
}

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id
    const deleted = await postService.deletePost(postId)
    if (!deleted) {
      return res.status(404).json({ message: "Post not found" })
    }
    res.status(204).send()
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete post", error: error.message })
  }
}

// Postları arama
exports.searchPosts = async (req, res) => {
  try {
    const searchTerm = req.query.term
    const posts = await postService.searchPosts(searchTerm)
    res.status(200).json(posts)
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to search post", error: error.message })
  }
}

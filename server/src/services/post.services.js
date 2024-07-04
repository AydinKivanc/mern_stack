const Post = require("../models/post.model")

// Tüm postları getirme
exports.getAllPosts = async () => {
  try {
    return await Post.find()
  } catch (error) {
    throw new Error("Error fetching posts")
  }
}

// Yeni bir post oluşturma
exports.createPost = async newPost => {
  try {
    const post = new Post(newPost)
    return await post.save()
  } catch (error) {
    //console.error("Error in createPost service:", error) // Hata günlüğüne ekleyin
    throw new Error("Error creating post")
  }
}

// Belirli bir postu getirme
exports.getAPost = async postId => {
  try {
    return await Post.findById(postId)
  } catch (error) {
    throw new Error("Error fetching post")
  }
}

// Postu güncelleme
exports.updatePost = async (postId, updatedPost) => {
  try {
    return await Post.findByIdAndUpdate(postId, updatedPost, { new: true })
  } catch (error) {
    throw new Error("Error updating post")
  }
}

// Postu silme
exports.deletePost = async postId => {
  try {
    return await Post.findByIdAndDelete(postId)
  } catch (error) {
    throw new Error("Error deleting post")
  }
}

// Postları arama
exports.searchPosts = async searchTerm => {
  try {
    const regex = new RegExp(searchTerm, "i")
    return await Post.find({ title: regex })
  } catch (error) {
    throw new Error("Error searching posts")
  }
}

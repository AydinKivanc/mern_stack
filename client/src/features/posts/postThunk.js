import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../services/api"
import { toast, Bounce } from "react-toastify"

// Tüm postları getirme
export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/posts/getAllPosts")
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

// Yeni bir post oluşturma
export const createPost = createAsyncThunk(
  "posts/create",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await api.post("/posts/create", postData) // Ensure the URL is correct here
      return response.data
    } catch (error) {
      console.error("Error in createPost thunk:", error) // Hata günlüğüne ekleyin
      return rejectWithValue(error.response.data)
    }
  }
)

// Belirli bir postu getirme
export const fetchPostById = createAsyncThunk(
  "posts/fetchById",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/posts/${postId}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

// Postu güncelleme
export const updatePost = createAsyncThunk(
  "posts/update",
  async ({ postId, updatedPost }, { rejectWithValue }) => {
    try {
      const response = await api.patch(
        `/posts/updatePost/${postId}`,
        updatedPost
      )
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

// Postu silme
export const deletePost = createAsyncThunk(
  "posts/delete",
  async (postId, { rejectWithValue }) => {
    try {
      await api.delete(`/posts/deletePost/${postId}`)
      return postId
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

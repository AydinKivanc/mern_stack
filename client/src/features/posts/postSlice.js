import { createSlice } from "@reduxjs/toolkit"
import {
  fetchAllPosts,
  createPost,
  fetchPostById,
  updatePost,
  deletePost,
} from "./postThunk"

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    // Tüm postları getirme
    builder
      .addCase(fetchAllPosts.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

    // Yeni bir post oluşturma
    builder
      .addCase(createPost.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false
        state.posts.push(action.payload)
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

    // Belirli bir postu getirme
    builder
      .addCase(fetchPostById.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false
        state.currentPost = action.payload
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

    // Postu güncelleme
    builder
      .addCase(updatePost.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false
        const index = state.posts.findIndex(
          post => post._id === action.payload._id
        )
        if (index !== -1) {
          state.posts[index] = action.payload
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

    // Postu silme
    builder
      .addCase(deletePost.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false
        state.posts = state.posts.filter(post => post._id !== action.payload)
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default postSlice.reducer

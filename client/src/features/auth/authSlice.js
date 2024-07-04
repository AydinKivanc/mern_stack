import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  loading: false,
  error: null,
  userToken: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true
      state.error = null
    },
    authSuccess(state, action) {
      state.loading = false
      state.user = action.payload
      state.userToken = action.payload
      // Kullanıcı bilgilerini localStorage'a kaydet
      localStorage.setItem("userToken", JSON.stringify(action.payload))
    },
    authFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    logout(state) {
      state.user = null
      state.userToken = null
      state.loading = false
      state.error = null
      // Kullanıcı bilgilerini localStorage'dan kaldır
      localStorage.removeItem("userToken")
    },
  },
})

export const { authStart, authSuccess, authFailure, logout } = authSlice.actions

export default authSlice.reducer

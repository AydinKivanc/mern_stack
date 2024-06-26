import { createSlice } from "@reduxjs/toolkit"

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchUsersStart(state) {
      state.loading = true
      state.error = null
    },
    fetchUsersSuccess(state, action) {
      state.loading = false
      state.list = action.payload
    },
    fetchUsersFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    // Diğer reducer'lar buraya eklenebilir
  },
})

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } =
  usersSlice.actions

export default usersSlice.reducer

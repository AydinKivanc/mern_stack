import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  modal: false,
  currentPost: null,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal(state, action) {
      state.modal = action.payload.isOpen
      state.currentPost = action.payload.currentPost
    },
  },
})

export const { setModal } = modalSlice.actions

export default modalSlice.reducer

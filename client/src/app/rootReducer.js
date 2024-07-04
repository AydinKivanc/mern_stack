import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import usersReducer from "../features/users/usersSlice"
import modalReducer from "../features/modal/modalSlice"
import postSlice from "../features/posts/postSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  modal: modalReducer,
  posts: postSlice,
  // Diğer slice'lar burada
})

export default rootReducer

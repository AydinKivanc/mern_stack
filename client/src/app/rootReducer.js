import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import usersReducer from "../features/users/usersSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  // Diğer slice'lar burada
})

export default rootReducer

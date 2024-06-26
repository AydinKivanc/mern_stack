import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./usersSlice"

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(fetchUsersStart())
    try {
      const response = await axios.get("/api/users")
      thunkAPI.dispatch(fetchUsersSuccess(response.data))
    } catch (error) {
      thunkAPI.dispatch(fetchUsersFailure(error.message))
    }
  }
)

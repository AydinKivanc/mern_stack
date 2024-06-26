import { createAsyncThunk } from "@reduxjs/toolkit"
import { authStart, authSuccess, authFailure } from "./authSlice"
import api from "../../services/api"
import { toast, Bounce } from "react-toastify"

export const login = createAsyncThunk(
  "auth/login",
  async (authData, thunkAPI) => {
    thunkAPI.dispatch(authStart())
    try {
      const response = await api.post("/api/v1/auth/login", authData)
      thunkAPI.dispatch(authSuccess(response.data))
      return response.data
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
      thunkAPI.dispatch(authFailure(error.message))

      throw error
    }
  }
)

export const register = createAsyncThunk(
  "auth/register",
  async (authData, thunkAPI) => {
    thunkAPI.dispatch(authStart())
    try {
      const response = await api.post("/api/v1/auth/register", authData)
      thunkAPI.dispatch(authSuccess(response.data))
      return response.data
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
      thunkAPI.dispatch(authFailure(error.message))

      throw error
    }
  }
)

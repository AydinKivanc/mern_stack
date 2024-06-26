import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../../features/auth/authThunk"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [authData, setAuthData] = useState({ email: "", password: "" })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error } = useSelector(state => state.auth)
  console.log(authData)
  // Login
  const handleChange = e => {
    setAuthData({ ...authData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(login(authData)).then(response => {
      if (!response.error) {
        navigate("/dashboard")
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="email"
          value={authData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="password"
          value={authData.password}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        disabled={loading}
      >
        Login
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  )
}

export default Login

import React, { useState } from "react"
import Login from "./components/Login"
import Register from "./components/Register"

const LoginPage = () => {
  const [isRegisteredUser, setIsRegisteredUser] = useState(true)

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center fixed top-0 right-0 bottom-0 left-0 z-50 justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegisteredUser ? "Login" : "Register"}
        </h2>
        {isRegisteredUser ? <Login /> : <Register />}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsRegisteredUser(!isRegisteredUser)}
            className="text-blue-500 hover:underline"
          >
            {isRegisteredUser
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

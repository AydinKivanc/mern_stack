import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom"

import HomePage from "./pages/home-page"
import Login from "./pages/login-page"
import Dashboard from "./pages/dashboard"
//import "./styles/global.css"; // Global stil dosyanız
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import useToken from "./hooks/useToken"
import { useEffect } from "react"
import Navbar from "./components/Navbar"

function App() {
  const [token] = useToken()
  console.log(token)
  // useEffect(() => {
  //   if (!token) {
  //     // Eğer token yoksa kullanıcıyı login sayfasına yönlendirin
  //     //navigate("/login")
  //   }
  // }, [token])

  return (
    <div>
      <BrowserRouter>
        {token && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={token ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={token ? <Dashboard /> : <Navigate to="/login" />}
          />
          {/* Diğer rotalar buraya eklenebilir */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App

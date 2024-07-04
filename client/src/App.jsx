import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom"

import HomePage from "./pages/home-page"
import Login from "./pages/login-page"
import Dashboard from "./pages/dashboard"
import Modal from "./components/Modal"
//import "./styles/global.css"; // Global stil dosyanız
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import useToken from "./hooks/useToken"
import Navbar from "./components/Navbar"
import { useSelector } from "react-redux"

function App() {
  // Custom hook ile token i localstorage dan alabiliriz
  // const [token] = useToken()
  // console.log(token)

  // useSelector ile state baglandik ve state de localstorage den alip state e kaydetme islemini zaten yaptik
  const { userToken } = useSelector(state => state.auth)
  console.log(userToken)

  return (
    <div>
      <BrowserRouter>
        {userToken && <Navbar />}
        <Modal />
        <Routes>
          <Route
            path="/"
            element={userToken ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/dashboard"
            element={userToken ? <Dashboard /> : <Navigate to="/login" />}
          /> */}
          {/* Diğer rotalar buraya eklenebilir */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App

// function App() {
//   const [token] = useToken()
//   console.log(token)
//   useEffect(() => {
//     if (!token) {
//       // Eğer token yoksa kullanıcıyı login sayfasına yönlendirin
//       //navigate("/login")
//     }
//   }, [token])

//   return (
//     <div>
//       <BrowserRouter>
//         {token && <Navbar />}
//         <Routes>
//           <Route
//             path="/"
//             element={token ? <HomePage /> : <Navigate to="/login" />}
//           />
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/dashboard"
//             element={token ? <Dashboard /> : <Navigate to="/login" />}
//           />
//           {/* Diğer rotalar buraya eklenebilir */}
//         </Routes>
//       </BrowserRouter>
//       <ToastContainer />
//     </div>
//   )
// }

// export default App

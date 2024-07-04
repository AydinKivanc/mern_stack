import React from "react"
import { IoIosLogOut } from "react-icons/io"
import { logout } from "../features/auth/authSlice"
import { useDispatch } from "react-redux"

const Navbar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    window.location.href = "/login"
  }

  const handleLogoClick = () => {
    window.location.href = "/"
  }

  return (
    <div className="bg-slate-400 p-5">
      <div className="flex justify-between">
        <div
          className="text-white font-bold text-2xl cursor-pointer"
          onClick={handleLogoClick}
        >
          POSTS POINT
        </div>
        <IoIosLogOut
          size={30}
          className="text-white cursor-pointer"
          onClick={handleLogout}
        />
      </div>
    </div>
  )
}

export default Navbar

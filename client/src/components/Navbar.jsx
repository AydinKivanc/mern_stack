import React from "react"
import { IoIosLogOut } from "react-icons/io"
import { logout } from "../features/auth/authSlice"
import { useDispatch } from "react-redux"
import { setModal } from "../features/modal/modalSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    window.location.href = "/login"
  }
  const openModal = () => {
    dispatch(setModal({ isOpen: true }))
  }

  return (
    <div className="bg-slate-500 p-5">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="flex justify-between items-center mb-4 sm:mb-0">
          <div className="text-white font-bold text-2xl cursor-pointer">
            POSTS POINT
          </div>
          <IoIosLogOut
            size={25}
            className="text-white cursor-pointer sm:hidden"
            onClick={handleLogout}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
          <input
            type="text"
            placeholder="Search"
            className="p-2 outline-none rounded-md"
          />
          <div
            className="text-white text-center w-full sm:w-36 border p-2 rounded-md cursor-pointer hover:bg-slate-700"
            onClick={openModal}
          >
            Create Post
          </div>
        </div>
        <IoIosLogOut
          size={25}
          className="text-white cursor-pointer hidden sm:block"
          onClick={handleLogout}
        />
      </div>
    </div>
  )
}

export default Navbar

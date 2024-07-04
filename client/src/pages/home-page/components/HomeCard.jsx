import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { AiOutlineDelete } from "react-icons/ai"
import { RxUpdate } from "react-icons/rx"
import { deletePost, updatePost } from "../../../features/posts/postThunk"
import { setModal } from "../../../features/modal/modalSlice"

const HomeCard = ({ post }) => {
  const dispatch = useDispatch()
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const handleDeletePost = postId => {
    dispatch(deletePost(postId))
      .unwrap()
      .then(() => {
        console.log("Post deleted successfully")
      })
      .catch(error => {
        console.error("Error deleting post:", error)
      })
  }

  const handleUpdatePost = post => {
    dispatch(setModal({ isOpen: true, currentPost: post }))
  }
  const openConfirmModal = () => {
    setIsConfirmOpen(true)
  }

  const closeConfirmModal = () => {
    setIsConfirmOpen(false)
  }

  const confirmDelete = () => {
    handleDeletePost(post._id)
    closeConfirmModal()
  }
  return (
    <div className="relative border p-4 rounded-lg bg-white shadow-md m-2 flex flex-col justify-between h-44">
      <div>
        <div className="font-bold text-lg text-gray-800">{post?.title}</div>
        <div className="text-gray-600 text-sm mt-2">{post?.description}</div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-500 text-xs">{post?.name}</span>
        <span className="text-gray-500 text-xs">
          {new Date(post?.date).toLocaleDateString()}
        </span>
      </div>
      <div className="absolute top-2 right-2 flex items-center space-x-2">
        <RxUpdate
          size={24}
          onClick={() => handleUpdatePost(post)}
          className="bg-slate-400 hover:bg-slate-600 rounded-full text-white p-1 cursor-pointer transition duration-200"
        />
        <AiOutlineDelete
          size={24}
          onClick={openConfirmModal}
          className="bg-red-400 hover:bg-red-600 rounded-full text-white p-1 cursor-pointer transition duration-200"
        />
      </div>

      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this post?</p>
            <div className="flex justify-end">
              <button
                className="bg-slate-400 text-white px-4 py-2 rounded-md mr-2 hover:bg-slate-500"
                onClick={closeConfirmModal}
              >
                Cancel
              </button>
              <button
                className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeCard

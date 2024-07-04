import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AiOutlineClose } from "react-icons/ai"
import { setModal } from "../features/modal/modalSlice"
import { createPost, updatePost } from "../features/posts/postThunk"

const Modal = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(state => state.modal.modal)
  const currentPost = useSelector(state => state.modal.currentPost)

  const [postData, setPostData] = useState({
    name: "",
    title: "",
    description: "",
  })
  useEffect(() => {
    if (currentPost) {
      setPostData(currentPost)
    } else {
      setPostData({
        name: "",
        title: "",
        description: "",
      })
    }
  }, [currentPost])

  const onChangeFunc = e => {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (currentPost) {
      dispatch(updatePost({ postId: currentPost._id, updatedPost: postData }))
        .then(() => {
          dispatch(setModal({ isOpen: false, currentPost: null }))
        })
        .catch(error => {
          console.error("Error updating post:", error)
        })
    } else {
      // Post işlemi burada yapılır
      dispatch(createPost(postData))
        .then(() => {
          // Post işlemi bittikten sonra input verilerini temizle
          setPostData({
            name: "",
            title: "",
            description: "",
          })
          // Post işlemi bittikten sonra modal'ı kapat
          dispatch(setModal({ isOpen: false, currentPost: null }))
        })
        .catch(error => {
          console.error("Error creating post:", error)
        })
    }
  }

  const closeModal = () => {
    dispatch(setModal({ isOpen: false, currentPost: null }))
  }

  if (!isOpen) return null // Modal açık değilse hiçbir şey render etme
  return (
    <div className="w-full h-screen bg-opacity-50 bg-slate-700 fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="bg-white w-2/3 sm:w-2/3 md:w-2/4 lg:w-1/3 p-2 rounded-md">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={closeModal}
        >
          <div className="font-bold text-2xl text-slate-500 ">
            {currentPost ? "Update Post" : "Create Post"}
          </div>
          <AiOutlineClose size={25} />
        </div>

        <div className="flex flex-col my-4 space-y-3">
          <input
            className="input-style"
            type="text"
            name="name"
            value={postData.name}
            placeholder="Enter your name"
            onChange={onChangeFunc}
          />
          <input
            className="input-style"
            type="text"
            name="title"
            value={postData.title}
            placeholder="Title"
            onChange={onChangeFunc}
          />
          <textarea
            className="input-style"
            name="description"
            value={postData.description}
            placeholder="Description"
            rows={3}
            onChange={onChangeFunc}
          />
        </div>
        <div className="flex justify-between">
          <button
            className="w-full p-2 bg-slate-400 text-white cursor-pointer rounded-md hover:bg-slate-500 mr-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="w-full p-2 bg-red-400 text-white cursor-pointer rounded-md hover:bg-red-600"
            onClick={handleSubmit}
          >
            {currentPost ? "Update" : "Share"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal

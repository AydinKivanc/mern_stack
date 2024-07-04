import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllPosts, searchPosts } from "../../features/posts/postThunk"
import HomeCard from "./components/HomeCard"
import { setModal } from "../../features/modal/modalSlice"
import { CiSearch } from "react-icons/ci"
import { useDebounce } from "@uidotdev/usehooks"

const HomePage = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts)
  const loading = useSelector(state => state.posts.loading)
  const error = useSelector(state => state.posts.error)

  const [postsFilter, setPostsFilter] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedTerm = useDebounce(searchTerm, 300)

  useEffect(() => {
    dispatch(fetchAllPosts())
  }, [dispatch])

  useEffect(() => {
    if (debouncedTerm) {
      dispatch(searchPosts(debouncedTerm))
    } else {
      dispatch(fetchAllPosts())
    }
  }, [debouncedTerm, dispatch])

  const openModal = () => {
    dispatch(setModal({ isOpen: true }))
  }

  const sortedPosts = () => {
    if (postsFilter === "asc") {
      return [...posts].sort((a, b) => new Date(a.date) - new Date(b.date))
    } else if (postsFilter === "desc") {
      return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
    }
    return posts
  }

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <div className="m-4 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
        <div
          className="text-white text-center w-full sm:w-36 border p-2 rounded-md cursor-pointer bg-slate-400 hover:bg-slate-600 shadow-lg"
          onClick={openModal}
        >
          Create Post
        </div>
        <div className="bg-white flex gap-3 p-2 rounded-lg overflow-hidden items-center shadow-lg">
          <CiSearch className="text-xl" />
          <input
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full outline-none"
            type="text"
            placeholder="Search posts..."
          />
        </div>
        <div className="flex-grow" />
        <div className="bg-white flex gap-3 p-2 rounded-lg overflow-hidden items-center shadow-lg">
          <select
            onChange={e => setPostsFilter(e.target.value)}
            className="outline-none w-full"
            defaultValue=""
          >
            <option value="" disabled>
              Sort by date
            </option>
            <option value="asc">Date Ascending</option>
            <option value="desc">Date Descending</option>
          </select>
        </div>
      </div>
      <div className="p-3 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {sortedPosts().map((post, index) => (
          <HomeCard key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export default HomePage

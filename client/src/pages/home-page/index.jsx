import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllPosts } from "../../features/posts/postThunk"
import HomeCard from "./components/HomeCard"

const HomePage = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts)
  const loading = useSelector(state => state.posts.loading)
  const error = useSelector(state => state.posts.error)

  useEffect(() => {
    dispatch(fetchAllPosts())
  }, [dispatch])

  return (
    <div className="p-3 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {posts?.map((post, index) => (
        <HomeCard key={index} post={post} />
      ))}
    </div>
  )
}

export default HomePage

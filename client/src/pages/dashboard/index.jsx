import { useSelector } from "react-redux"

const Dashboard = () => {
  const { posts } = useSelector(state => state.posts)
  console.log("<<< POSTS >>> ", posts)

  return <div>Dashboard</div>
}

export default Dashboard

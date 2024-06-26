import { useEffect, useState } from "react"

const useToken = () => {
  const [token, setToken] = useState("")
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userToken"))
    if (user && user.token) {
      setToken(user.token)
    }
  }, [])

  return [token]
}

export default useToken

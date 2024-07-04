import { useState, useEffect } from "react"

const useToken = () => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userToken"))
    if (user && user.token) {
      setToken(user.token)
    }
  }, [])

  return [token]
}

export default useToken

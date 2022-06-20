import { useState } from "react"

import Login from "./components/Login"
import Registration from "./components/Registration"

export default function Authentication() {
  const [typeOpen, setTypeOpen] = useState("registration")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleUsernameChange = (text) => {
    setUsername(text)
  }

  const handlePasswordChange = (text) => {
    setPassword(text)
  }

  const handleLoginSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
    console.log("username", username)
    console.log("password", password)
  }

  return typeOpen === "login" ? (
    <Login
      loading={loading}
      username={username}
      password={password}
      handleUsernameChange={handleUsernameChange}
      handlePasswordChange={handlePasswordChange}
      setTypeOpen={setTypeOpen}
      submit={handleLoginSubmit}
    />
  ) : (
    <Registration setTypeOpen={setTypeOpen} />
  )
}

import { useState } from "react"

import Login from "./components/Login"

export default function Authentication() {
  const [typeOpen, setTypeOpen] = useState("login")
  const [username, setUsername] = useState("")

  const handleUsernameChange = (text) => {
    setUsername(text)
  }

  return typeOpen === "login" ? (
    <Login username={username} handleUsernameChange={handleUsernameChange} />
  ) : (
    <div>registration</div>
  )
}

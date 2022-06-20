import { useState } from "react"

import Login from "./components/Login"
import Registration from "./components/Registration"

export default function Authentication() {
  const [typeOpen, setTypeOpen] = useState("registration")
  const [username, setUsername] = useState("")

  const handleUsernameChange = (text) => {
    setUsername(text)
  }

  return typeOpen === "login" ? (
    <Login username={username} handleUsernameChange={handleUsernameChange} />
  ) : (
    <Registration />
  )
}

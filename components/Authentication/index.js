import { useState } from "react"

import Login from "./components/Login"
import Registration from "./components/Registration"

import { validateEmail } from "../../helpers/strings/emailValidation"

import { ADD_USER, LOGIN_USER } from "../../graphQL/mutations"

import { useMutation } from "@apollo/client"

export default function Authentication() {
  const [typeOpen, setTypeOpen] = useState("registration")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const [addUser] = useMutation(ADD_USER)
  const [loginUser] = useMutation(LOGIN_USER)

  const handleUsernameChange = (text) => {
    setUsername(text)
  }

  const handlePasswordChange = (text) => {
    setPassword(text)
  }

  const handleEmailChange = (text) => {
    setEmail(text)
  }

  const handleRegistrationSubmit = async () => {
    const addUserData = {
      username: username,
      email: email,
      password: password,
    }

    if (!validateEmail(email)) {
      console.error("invalid email")
      return
    }
    const { data } = await addUser({ variables: addUserData })

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }

  const handleLoginSubmit = async () => {
    const loginUserData = {
      username: username,
      password: password,
    }
    const { data, errors } = await loginUser({ variables: loginUserData })

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
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
    <Registration
      setTypeOpen={setTypeOpen}
      username={username}
      password={password}
      email={email}
      handleEmailChange={handleEmailChange}
      handleUsernameChange={handleUsernameChange}
      handlePasswordChange={handlePasswordChange}
      submit={handleRegistrationSubmit}
      loading={loading}
    />
  )
}

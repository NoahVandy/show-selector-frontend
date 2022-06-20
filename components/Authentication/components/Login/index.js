import { useState } from "react"

import styles from "../../../../styles/Authentication/authentication.module.css"

import Input from "../../../UI/Input"
import Button from "../../../UI/Button"

import { CircularProgress } from "@mui/material"

const Login = ({
  loading,
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
  setTypeOpen,
  submit,
}) => {
  return (
    <div className={styles.containerLogin}>
      <div className={styles.containerLeft}>
        <p>
          show selector.
          <br />
          login.
        </p>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.loginTitleRow}>
          <p variant="h3">login.</p>
        </div>
        <div className={styles.loginActions}>
          <Input
            placeholder="username."
            value={username}
            onChange={(text) => handleUsernameChange(text)}
          />
          <Input
            placeholder="password."
            value={password}
            onChange={(text) => handlePasswordChange(text)}
            type="password"
          />
        </div>
        <div className={styles.loginBottom}>
          <Button onClick={() => setTypeOpen("register")}>sign up.</Button>
          <Button onClick={() => submit()} disabled={loading}>
            login.{" "}
            {loading && (
              <CircularProgress
                size={22}
                sx={{
                  color: "#e4ddf4",
                }}
              />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login

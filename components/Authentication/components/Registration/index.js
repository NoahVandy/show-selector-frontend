import styles from "../../../../styles/Authentication/authentication.module.css"

import Input from "../../../UI/Input"
import Button from "../../../UI/Button"

import { CircularProgress } from "@mui/material"

export default function Registration({
  loading,
  setTypeOpen,
  email,
  username,
  password,
  handleEmailChange,
  handleUsernameChange,
  handlePasswordChange,
  submit,
}) {
  return (
    <div className={styles.containerRegister}>
      <div className={styles.containerLeft}>
        <p>
          show selector.
          <br />
          sign up.
        </p>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.registrationTitleRow}>
          <p>sign up.</p>
          <Input
            placeholder="email."
            value={email}
            onChange={(text) => handleEmailChange(text)}
          />
          <Input
            placeholder="username."
            value={username}
            onChange={(text) => handleUsernameChange(text)}
          />
          <Input
            type="password"
            placeholder="password."
            value={password}
            onChange={(text) => handlePasswordChange(text)}
          />
        </div>
        <div className={styles.loginBottom}>
          <Button onClick={() => setTypeOpen("login")}>login.</Button>
          <Button onClick={() => submit()} disabled={loading}>
            sign up.{" "}
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

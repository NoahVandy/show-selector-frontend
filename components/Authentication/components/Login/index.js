import { useState } from "react"

import styles from "../../../../styles/Authentication/authentication.module.css"

import Input from "../../../UI/Input"
import Button from "../../../UI/Button"

const Login = ({ username, handleUsernameChange }) => {
  return (
    <div className={styles.containerLogin}>
      <div className={styles.containerLeft}>
        <p variant="h3">show selector.</p>
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
          <Input placeholder="password." type="password" />
        </div>
        <div className={styles.loginBottom}>
          <Button>register.</Button>
          <Button>login.</Button>
        </div>
      </div>
    </div>
  )
}

export default Login

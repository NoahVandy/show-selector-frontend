import styles from "../../../../styles/Authentication/authentication.module.css"

import Input from "../../../UI/Input"
import Button from "../../../UI/Button"

export default function Registration({ setTypeOpen }) {
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
          {/* HINT: this is where the new inputs would go */}
        </div>
        <div className={styles.loginBottom}>
          <Button onClick={() => setTypeOpen("login")}>login.</Button>
          <Button>sign up.</Button>
        </div>
      </div>
    </div>
  )
}

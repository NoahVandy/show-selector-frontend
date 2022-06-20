import styles from "../../../../styles/Authentication/authentication.module.css";

import Input from "../../../UI/Input";
import Button from "../../../UI/Button";

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
          <Input placeholder="email." value={email} type="email" />
          <Input placeholder="username." value={username} type="username" />
          <Input placeholder="password." value={password} type="password" />
        </div>
        <div className={styles.loginBottom}>
          <Button onClick={() => setTypeOpen("login")}>login.</Button>
          <Button onClick={() => setTypeOpen("signup")}>sign up.</Button>
        </div>
      </div>
    </div>
  );
}

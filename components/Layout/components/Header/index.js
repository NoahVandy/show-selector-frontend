import styles from "../../../../styles/Layout/header.module.css"

import MenuIcon from "@mui/icons-material/Menu"

const Header = () => {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.menuIcon}>
            <MenuIcon />
          </div>
          <h1>ethan is stupid.</h1>
        </div>
        <div className={styles.right}>
          <p>login.</p>
        </div>
      </div>
    </nav>
  )
}

export default Header

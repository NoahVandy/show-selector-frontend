import Header from "./components/Header"

import styles from "../../styles/Layout/layout.module.css"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
    </>
  )
}

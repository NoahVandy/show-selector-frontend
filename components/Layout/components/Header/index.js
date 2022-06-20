import { useState } from "react"

import Link from "next/link"

import styles from "../../../../styles/Layout/header.module.css"

import MenuIcon from "@mui/icons-material/Menu"
import Modal from "@mui/material/Modal"

import Authentication from "../../../Authentication"

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleClose = (e) => {
    setOpen(false)
  }
  return (
    <nav>
      <Modal
        open={open}
        onClose={(e) => handleClose(e)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Authentication />
      </Modal>
      <div className={styles.container}>
        <div className={styles.left}>
          {/* <div className={styles.menuIcon}>
            <MenuIcon />
          </div> */}
          <h1>show selector.</h1>
        </div>
        <div className={styles.right}>
          <Link href="/tvshows">
            <p className={styles.navButton}>tv shows.</p>
          </Link>
          <p
            className={styles.navButton}
            onClickCapture={() => {
              setOpen(true)
            }}
          >
            login.
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Header

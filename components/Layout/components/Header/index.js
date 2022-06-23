import { useState } from "react"

import Link from "next/link"

import styles from "../../../../styles/Layout/header.module.css"

import MenuIcon from "@mui/icons-material/Menu"
import Modal from "@mui/material/Modal"

import Authentication from "../../../Authentication"

import { useUser, useUserUpdate } from "../../../context/UserContext"
import { useRadioGroup } from "@mui/material"
import { useRouter } from "next/router"
import { Logout } from "@mui/icons-material"

const Header = () => {
  const user = useUser()
  const updateUser = useUserUpdate()

  const [open, setOpen] = useState(false)
  const handleClose = (e) => {
    setOpen(false)
  }

  const Logout = () => {
    updateUser(null)
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
          {user && (
            <Link href="/profile">
              <p className={styles.navButton}> {user.username}</p>
            </Link>
          )}
          {!user ? (
            <p
              className={styles.navButton}
              onClickCapture={() => {
                setOpen(true)
              }}
            >
              Login
            </p>
          ) : (
            <p
              className={styles.navButton}
              onClickCapture={() => {
                Logout()
              }}
            >
              Logout
            </p>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header

import styles from "../../../../styles/Layout/header.module.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import authStyles from "../../../../styles/Authentication/authentication.module.css";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <nav>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={authStyles.container}>
          <div className={authStyles.containerLeft}>
            <Typography variant="h3">college trade.</Typography>
          </div>
          <div className={authStyles.containerRight}>
            <div className={authStyles.loginTitleRow}>
              <Typography variant="h3">log in.</Typography>
            </div>
            <div className={authStyles.loginAction}>
              <input />
            </div>
          </div>
        </div>
      </Modal>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.menuIcon}>
            <MenuIcon />
          </div>
          <h1>ethan is stupid.</h1>
        </div>
        <div className={styles.right}>
          <p
            className={authStyles.loginBtn}
            onClickCapture={() => {
              setOpen(true);
            }}
          >
            login/signup
          </p>
          <Link href="/profile">Profile Page</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

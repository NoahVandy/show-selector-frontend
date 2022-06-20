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
<<<<<<< Updated upstream
            className={authStyles.loginBtn}
=======
            className={styles.navButton}
>>>>>>> Stashed changes
            onClickCapture={() => {
              setOpen(true);
            }}
          >
            login.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;

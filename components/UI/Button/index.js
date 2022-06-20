import styles from "../../../styles/App/UI/button.module.css"

import Button from "@mui/material/Button"

export default function CustomButton({ children, onClick, disabled }) {
  return (
    <Button
      className={styles.button}
      onClickCapture={() => onClick()}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

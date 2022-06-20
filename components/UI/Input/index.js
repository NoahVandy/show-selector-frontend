import styles from "../../../styles/App/UI/input.module.css"

export default function Input({ value, onChange, placeholder, type }) {
  return (
    <input
      value={value}
      onChangeCapture={(e) => onChange(e.target.value)}
      className={styles.input}
      placeholder={placeholder}
      type={type}
    />
  )
}

import style from "../../styles/Profile/profile.module.css"

import { useUser } from "../../components/context/UserContext"

export default function Profile() {
  const user = useUser()

  return (
    <div className={style.profileContainer}>
      <p>{user?.username}</p>
    </div>
  )
}

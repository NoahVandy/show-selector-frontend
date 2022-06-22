import React, { createContext, useContext, useState } from "react"

const UserContext = createContext()
const UpdateUserContext = createContext()

export function useUser() {
  return useContext(UserContext)
}

export function useUserUpdate() {
  return useContext(UpdateUserContext)
}

export function UserContextDiv({ children }) {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={user}>
      <UpdateUserContext.Provider value={setUser}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  )
}

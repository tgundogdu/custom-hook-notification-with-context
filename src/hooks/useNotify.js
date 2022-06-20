import React, { useContext, createContext, useState } from 'react'

//Notify Context
const NotifyContext = createContext()

//Notify hook
export const useNotify = () => {
  return useContext(NotifyContext)
}

//Notify provider
export function NotifyProvider({ children }) {
  const [params, setParams] = useState({
    open: false,
    color: 'info',
    message: 'Message.',
    vertical: 'bottom',
    horizontal: 'center',
    variant: 'filled',
  })

  const onClose = () => {
    setParams({ ...params, open: false })
  }

  const setNotify = (newParams) => {
    setParams({ ...params, ...newParams })
  }

  return (
    <NotifyContext.Provider value={{ ...params, setNotify, onClose }}>
      {children}
    </NotifyContext.Provider>
  )
}

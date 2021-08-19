import { createContext, useContext } from 'react'
export const ToggleContext = createContext()

export function useToggleContext() {
  const context = useContext(ToggleContext)
  if (!context) {
    throw new Error(
      `Toggle context undefined`,
    )
  }
  return context
}
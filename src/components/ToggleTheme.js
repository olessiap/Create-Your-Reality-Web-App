import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return(
    <button className="theme-button" onClick={toggleTheme}>Change Theme</button>
  )
}
export default ToggleTheme

import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  return (
    <nav style={{ background: theme.ui, color:theme.syntax, }}>
      <h1>Manifest your Reality</h1>
      <div onClick={toggleAuth}>
        { isAuthenticated ? 'logged in' : 'logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar

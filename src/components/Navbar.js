import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'
import { ThankYouContext } from '../contexts/ThankYouContext';

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { thankYous } = useContext(ThankYouContext)
  const theme = isLightTheme ? light : dark

  return (
    <nav style={{ background: theme.ui, color:theme.syntax, }}>
      <h1>Manifest your Reality</h1>
      <div onClick={toggleAuth}>
        { isAuthenticated ? 'logged in' : 'logged out'}
      </div>
      <p>you have {10 - thankYous.length} thank yous left to write</p>
      <ul>
        <li>S</li>
        <li>A</li>
        <li>V</li>
        <li>E</li>
        <li>R</li>
        <li>S</li>
      </ul>
    </nav>
  )
}

export default Navbar

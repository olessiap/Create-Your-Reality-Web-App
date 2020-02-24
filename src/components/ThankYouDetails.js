import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

const ThankYouDetails = (props) => {
  const { isLightTheme, dark, light } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  return(
    <li style={{background:theme.ui}}>{props.thankYou}</li>
  )
}

export default ThankYouDetails
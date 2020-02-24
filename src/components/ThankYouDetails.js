import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { ThankYouContext } from '../contexts/ThankYouContext';

const ThankYouDetails = ({ thankYou}) => {
  const { isLightTheme, dark, light } = useContext(ThemeContext)
  const { dispatch } = useContext(ThankYouContext)
  const theme = isLightTheme ? light : dark
  return(
    <li onClick={()=>dispatch({type:'REMOVE_THANKYOU', id: thankYou.id})} style={{background:theme.ui}}>{thankYou.title}</li>
  )
}

export default ThankYouDetails
import React, { useContext } from 'react'
import { ThankYouContext } from '../contexts/ThankYouContext'
import ThankYouDetails from '../components/ThankYouDetails'
import { ThemeContext } from '../contexts/ThemeContext';

const ThankYouList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { thankYous } = useContext(ThankYouContext)
  const theme = isLightTheme ? light : dark
  return thankYous.length ? (
    <div className="thank-you-list" style={{background:theme.bg, color:theme.syntax}}>
      <ul>
        {thankYous.map(item => {
          return <ThankYouDetails key={item.id} thankYou={item} />
        })}
      </ul>
    </div>
  ) : (
    <div className="empty" style={{background:theme.bg, color:theme.syntax}}>Add 10 things you're greatful for today</div>// do crazy analytics later 
  )
}

export default ThankYouList
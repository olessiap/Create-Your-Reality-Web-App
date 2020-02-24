import React, { useContext, useState } from 'react'
import { ThankYouContext } from '../contexts/ThankYouContext';
import { ThemeContext } from '../contexts/ThemeContext';

const ThankYouForm = () => {
  const { addThankYou } = useContext(ThankYouContext)
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const [ title, setTitle ] = useState("")

  const theme = isLightTheme ? light : dark

  const handleSubmit = (e) => {
    e.preventDefault()
    if(title.length > 0) {
      addThankYou(title)
      setTitle('')
    }else {
      console.log("empty thank you")
    }
  }

  return (
    <div style={{background:theme.bg, color:theme.syntax}}>
      <form className="thank-you-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="add a thank you" value={title} onChange={(e) => setTitle(e.target.value)} style={{background:theme.ui, color:theme.syntax}}/>
        <input type="submit" value="add" style={{background:theme.ui, color:theme.syntax}}/>
      </form>
    </div>
  )
}

export default ThankYouForm
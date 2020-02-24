import React, { useState, createContext } from 'react'
import uuid from 'uuid/v1'

export const ThankYouContext = createContext()

const ThankYouContextProvider = (props) => {
  const [thankYous, setThankYou] = useState([
    {title: "for finding ganas to work on a weekend", id:1},
    {title: "for the plantitas", id:2},
    {title: "for the desk", id:3}
  ])
  const addThankYou = (title) => {
   setThankYou([...thankYous, {title, id:uuid()}]) 
  }
  const removeThankYou = (id) => {
    setThankYou(thankYous.filter( item => item.id !== id))
  }
  return (
    <ThankYouContext.Provider value={{thankYous, addThankYou, removeThankYou}}>
      {props.children}
    </ThankYouContext.Provider>
  )
}

export default ThankYouContextProvider
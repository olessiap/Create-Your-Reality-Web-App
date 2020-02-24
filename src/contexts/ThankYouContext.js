import React, { useState, createContext } from 'react'

export const ThankYouContext = createContext()

const ThankYouContextProvider = (props) => {
  const [thankYous, setThankYou] = useState([
    {title: "for finding ganas to work on a weekend", id:1},
    {title: "for the plantitas", id:2},
    {title: "for the desk", id:3}
  ])
  // addThankYou = (thankYou) => {
  //   setThankYou(...thankYous, thankYou)
  // }
  // removeThankYou = (id) => {
  //   thankYous.filter(() => thankYou.id !== id)
  // }
  return (
    <ThankYouContext.Provider value={{thankYous}}>
      {props.children}
    </ThankYouContext.Provider>
  )
}

export default ThankYouContextProvider
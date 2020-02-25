import React, { useEffect, useReducer, createContext } from 'react'
import { thankYouReducer } from './reducers/thankYouReducer';

export const ThankYouContext = createContext()

const ThankYouContextProvider = (props) => {
  const [thankYous, dispatch] = useReducer(thankYouReducer, [], () => {
    const localData = localStorage.getItem('thankYous')
    return localData ? JSON.parse(localData) : []
  })
  useEffect(() => {
    localStorage.setItem('thankYous', JSON.stringify(thankYous))
  }, [thankYous])
  return (
    <ThankYouContext.Provider value={{thankYous, dispatch}}>
      {props.children}
    </ThankYouContext.Provider>
  )
}

export default ThankYouContextProvider
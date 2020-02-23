import React, { createContext, useState } from 'react'

export const ManifestContext = createContext()

const ManifestContextProvider = (props) => {
  const [ manifestations, setManifestation ] = useState([
    {name: "get a remote dollar paying job", id: 1},
    {name: "visit home whenenever I want", id: 2},
    {name: "save 5K a month", id:3},
    {name: "help mom retire early", id:4},

  ])
  return (
    <ManifestContext.Provider value={{manifestations}}>
      {props.children}
    </ManifestContext.Provider>
  )
}

export default ManifestContextProvider
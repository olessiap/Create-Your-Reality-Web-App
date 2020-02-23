import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { ManifestContext } from '../contexts/ManifestContext';

const ManifestList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { manifestations } = useContext(ManifestContext)
  const theme = isLightTheme ? light : dark
  return ( 
    <div className="manifest-list" style={{ background:theme.bg, color:theme.syntax }}>
      <ul>
        {manifestations.map(item => {
          return (
            <li key={item.id} style={{background:theme.ui}}>{item.name}</li>
          )
        })}
      </ul>
    </div>
   )
}
 
export default ManifestList


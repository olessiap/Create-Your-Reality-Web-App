import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ManifestList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  return ( 
    <div className="manifest-list" style={{ background:theme.ui, color:theme.syntax }}>
      <ul>
        <li style={{ background:theme.bg }}>Get a remote, dollar paying job</li>
        <li style={{ background:theme.bg }}>Visit mom whenever</li>
        <li style={{ background:theme.bg }}>save 5k a month</li>
      </ul>
    </div>
   )
}
 
export default ManifestList


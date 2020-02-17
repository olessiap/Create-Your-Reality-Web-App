import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export class ManifestList extends Component {
  static contextType = ThemeContext
  render() {
    const { isLightTheme, light, dark } = this.context
    const theme = isLightTheme ? light : dark

    return (
      <div className="manifest-list" style={{ background:theme.ui, color:theme.syntax}}>
        <ul>
          <li>Get a remote, dollar paying job</li>
          <li>Visit mom whenever</li>
          <li>save 5k a month</li>
        </ul>
      </div>
    )
  }
}

export default ManifestList

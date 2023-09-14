

import React, { Component } from 'react'

export default class HoverMouse extends Component {
 
  render() {
    const {count, handler, theme} = this.props
    const style = theme === 'dark'? {backgroundColor: '#000000', color: '#ffffff' }: null
   
    return (
    <div>
        <h1  style={style} onMouseOver={handler}> {theme} Hovered {count} times</h1>
    </div>
    )
  }
}



import React, { Component } from 'react'

export default class HoverMouse extends Component {
 
  render() {
    const {count, handler} = this.props
    return (
    <div>
        <h1 onMouseOver={handler}> Hovered {count} times</h1>
    </div>
    )
  }
}

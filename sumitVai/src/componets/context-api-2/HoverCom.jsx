import React, { Component } from 'react'

export default class HoverCom extends Component {
  render() {

    const {clickHandler} = this.props
    return (
      <div>
        <h2>this is hover component</h2>

        <button onClick={clickHandler}>submit</button>
      </div>
    )
  }
}

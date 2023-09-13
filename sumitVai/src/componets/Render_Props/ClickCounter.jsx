
import React, { Component } from 'react'

export default class ClickCounter extends Component {
 
 
  render() {
   const { count, incrementCount } = this.props
    return (

      <div>
          <button onClick={incrementCount} type='button' > Clicked {count} times</button>
       </div>
    )
  }
}



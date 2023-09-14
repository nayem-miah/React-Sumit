
import React, { Component } from 'react'

export default class ClickCounter extends Component {
 
  render() {
   const { count, handler } = this.props
    return (

       <div>
          <button onClick={handler} type='button' > Clicked {count} times</button>
       </div>

    )
  }
}



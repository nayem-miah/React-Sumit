import React, { Component } from 'react'

export default class Button extends Component {
 constructor (props) {
    super(props)
    this.state = {
      
    }
 
 }
 



  render() {
    
    console.log('button1 is rendering') //here button is rendering again and again 

    const { change} = this.props;
    return (
      <div>
        <button onClick={change}>Make English Clock</button>
      </div>
    )
  }
}

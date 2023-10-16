import React, { Component } from 'react'

export default class WithClass extends Component {

   state= {
    value: "",
  }

  clickHandler = (evt) => {
   this.setState ({
     value: evt.target.value
   })
  }



  render() {

    const {value} = this.state
    return (
      <div>
        

        <input onChange={this.clickHandler} placeholder='Enter text' value={value} type="text" />
          
         
          <h1>this is hook {value}</h1>


      </div>
    )
  }
}

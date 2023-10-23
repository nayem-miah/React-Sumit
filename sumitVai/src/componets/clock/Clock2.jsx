import React, { Component } from 'react'

import Button from './Button'
import Button2 from './Button2'

export default class Clock extends Component {
 
  constructor(props) {
    super(props)  // we call extend React Component class by super(props)
    this.state = { 
      date: new Date(),
      local: "bn-BD"
    }
  }


  componentDidMount(){      // when data is on DOM, componentDidMount is called automatically. its a defualt method

     this.clockTimer = setInterval(() => this.tick(), 1000)

  }

  componentWillUnmount(){
    clearInterval(this.clockTimer)
  
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  
  buttonHandler = () =>{

    this.setState({
      local: "en-US",
    })
  }

  buttonHandler2 = (e) =>{
     this.setState({
      local: e
     });
  }


  render() {
   
    

    return (
      <div>
        <h1> hello {this.state.date.toLocaleTimeString(this.state.local)}</h1>
        <Button change={this.buttonHandler} />


        {/* button from another page with parameter but it's not good practice to sent parameters*/}
        <Button2 change={this.buttonHandler2} local="bn-BD"/>

      </div>
    )
  }
} 




// 1= render method will reander data, they will go on DOM,
// 2= when data is on DOM, componentDidMount method will be called automatically 
// 3 = this.setState will change the data and render method again render 

// 4 = componentDidMount will be called again and again
// 5 = to stop it when user is in other page we use componentWillUnmount method 

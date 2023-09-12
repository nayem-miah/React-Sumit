import React, { Component } from 'react'

export default class Clock extends Component {
 
  constructor(props) {
    super(props)  // we call extend React Component class by super(props)
    this.state = { 
      date: new Date()
    }
  }


  componentDidMount(){      // when data is on DOM, componentDidMount is called automatically. its a defualt method
     setInterval(() => {
        this.setState({
          date: new Date()
        })
     }, 1000)
  }
  

  render() {
    return (
      <div>
        <h1> hello {this.state.date.toLocaleTimeString(this.props.local)} </h1>
      </div>
    )
  }
} 


// 1= render method will reander data, they will go on DOM,
// 2= when data is on DOM, componentDidMount method will be called automatically 
// 3 = this.setState will change the data and remder method again render 
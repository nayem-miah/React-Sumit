import React, { Component } from 'react'

export default class Clock3 extends Component {
 
  constructor(props){
    super(props)
    this.state={
      time: new Date(),
      local: "bn-BD",
      text: "English Clock"

    }
  }
  
  ButtonHandler = ()=>{
    if (this.state.local == "bn-BD"){
      this.setState({
        local: "en-US",
        text: "Bangla Clock"

      })
    } else{
      this.setState({
        local: "bn-BD",
        text: "English Clock"

      })
    }
   
  }

  componentDidMount(){
    this.clockTImer = setInterval(()=>{
         this.setState({
          time:new Date()
         })
    }),1000
  }1

  componentWillUnmount(){
    clearInterval(this.clockTImer)
  }

  render() {
    const {local,time, text} = this.state
    return (
      <div>
         
         <h1> Apu Clock {time.toLocaleTimeString(local)}</h1>
         <button onClick={this.ButtonHandler}>{text}</button>

      </div>
    )
  }
}

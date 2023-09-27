
import React, { Component } from 'react'

export default class UseEffectHook extends Component {

   state = {
    count: 0,
    date : new Date(),
   } 


  addClickHandler = ()=>{
    this.setState(({count})=>({
        count: count + 1
    }))
  }

  componentDidMount(){
    const {count} = this.state
    document.title = `clicked ${count} times`
    setInterval(this.tick, 1000)
  }

  componentDidUpdate(){
    const {count} = this.state
    document.title = `clicked ${count} times`
  }

  tick = ()=>{
    this.setState({
        date: new Date()
    })
  }
  render() {

    const { date } = this.state
    return (
      <div>

         <p>Time: {date.toLocaleTimeString()}</p>
 
         <p>
         <button onClick={this.addClickHandler} type='button'>Click</button>
         </p>

      </div>
    )
  }
}

import Clock2 from './componets/clock/Clock2'
import Clock from './componets/clock/Clock'
import Clock3 from './componets/clock/Clock3'
import ClockList from './componets/clock/ClockList'
import React, { Component } from 'react'

export default class ClockApp extends Component {

   


  render() {
   const quantities = [1,3,5,23]
    
    return (
      <> 

        <Clock/>
        <Clock2 local="bn-BD"/>
        <Clock3/>
        <ClockList quantity={quantities} />


      </>
    ) 
  }
}


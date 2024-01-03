import Calculator from './componets/lifting-State-Up/Calculator'
import CmInchCalculator from './componets/cm-inch-lifting-state-up/Calculator'
import React, { Component } from 'react'

export default class LiftingApp extends Component {

   


  render() {

    
    return (
      <> 

        <Calculator/>
        <CmInchCalculator/>

      </>
    ) 
  }
}

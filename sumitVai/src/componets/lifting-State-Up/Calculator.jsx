import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput';
import {converter, toCelsius, toFahrenheit} from './lib/converter';

export default class Calculator extends Component {

   state={
    temparature: '',
    scale: 'c',
  }

    inputHandler=(e,scale)=>{
          
      this.setState({
          temparature:e.target.value,
          scale:scale
      })
    }


  render() {

    const {temparature,scale} = this.state;


    
    const celsius = scale === 'f' ?  converter(temparature,toCelsius) : temparature
    const fahrenheit = scale === 'c' ?  converter(temparature,toFahrenheit) : temparature
    
   
   
    return (
      <div>
       
        <TemperatureInput scale="c" temparature={celsius} inputHandler={this.inputHandler}/>
        <TemperatureInput scale="f" temparature={fahrenheit} inputHandler={this.inputHandler}/>
  
        <BoilingVerdict celsius={celsius}/>
      </div>
    )
  }
}

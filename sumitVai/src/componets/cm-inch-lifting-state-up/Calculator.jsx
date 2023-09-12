import React, { Component } from 'react'
import {convert} from './converter'
import Input from './Input'
import Capablity from './Capablity'
export default class Calculator extends Component {
  state = {
      feet:"",
      inch:"",
    }
    feetHandler =(e)=>{
    this.setState({
        feet:e.target.value
    })}

    inchHandler =(e)=>{
        this.setState({
            inch:e.target.value
        })
    }
  
  render() {
    const {feet,inch} = this.state
    const result = convert(feet,inch)

    return (
      <div>
        <Input feetHandler={this.feetHandler} inchHandler={this.inchHandler} feet={feet} inch={inch} result={result}/>
        <Capablity result={result}/>
      </div>
    )
  }
}

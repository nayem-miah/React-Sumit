import React, { Component } from 'react'

export default class Button2 extends Component {

  shouldComponentUpdate(nextProps, nextState) {   // to control rendering again and again

    const { change:currentChange} = this.props;
    const {change: nextChange} = nextProps;

    if (currentChange===nextChange){
        return false;
    }else{
        return true;
    }

  }
  render() {
    console.log('button2 is rendering')
    const {change, local}= this.props
    return (
      <div>
        <button onClick={()=>change(local)}>Make Bangla Clock</button>
      </div>
    )
  }
}

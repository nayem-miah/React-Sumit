import React, { Component } from 'react'

export default class Counter extends Component {

    state={
        count: 0
    }
    ClickHandler = () => {
  
        this.setState({count: this.state.count + 1})
        
    }

  render() {
    const {count} = this.state;
    const {children} = this.props;
    
    return children(count, this.ClickHandler);
  }
}



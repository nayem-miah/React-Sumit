import React, { Component } from 'react'


const withCounter = (OrginalComponent)=>{
    class NewComponent extends Component {
        state ={
            count: 0,
        }
      countHandler=()=>{
         this.setState((prevState)=>(
         
            { count: prevState.count + 1}
            ))
      }
      render() {
        const {count}= this.state
        return <OrginalComponent count={count} countHandler={this.countHandler} />
      }
    }
    return NewComponent;
}

export default withCounter;

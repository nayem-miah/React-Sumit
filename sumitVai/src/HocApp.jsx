import React, { Component } from 'react'
import ClickCount from './componets/higher-oerder-components/ClickCount'
import HoverCounter from './componets/higher-oerder-components/HoverCounter'

export default class HocApp extends Component {

  render() {
    
    return (
      <> 

     <ClickCount/>    
     <HoverCounter/>  

      </>
    ) 
  }
}


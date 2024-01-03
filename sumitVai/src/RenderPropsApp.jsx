
import React, { Component } from 'react'
import ClickCounter from './componets/Render_Props/ClickCounter'
import HoverMouse from './componets/Render_Props/HoverMouse'
import Counter from './componets/Render_Props/Counter'
export default class RenderPropsApp extends Component {

   


  render() {
    
    return (
      <> 

      
     <Counter Renfunc = {(counter,incrementCount)=>(
      
           <ClickCounter count={counter} incrementCount={incrementCount} />
           
           )} 
      />

      
    <Counter Renfunc = {(count, handler)=> (
        <HoverMouse count = {count} handler={handler} />
    )}/> 


      </>
    ) 
  }
}

import React from 'react'
import Counter from './Counter'
import ClickCounter from './ClickCounter'
import HoverMouse from './HoverMouse'

export default function Content({theme}) {
  return (
     <div>

      <h3>This is content component </h3>


         <Counter Renfunc= {(count, handler) =>{
            return (value)=> <HoverMouse count={count} handler={handler} theme={theme}/>
         }}
      
      />


    </div>
  )
}

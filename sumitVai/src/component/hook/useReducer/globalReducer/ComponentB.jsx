import React from 'react'
import { counterContext } from '../../../../App2' 
export default function ComponentB() {
   const countContex = React.useContext(counterContext);
  return (
    <div>
      <h1>hi component B</h1>
      <button type='button' onClick={()=>countContex.counterDispatch('increment')}>Increment</button>
      <button type='button' onClick={()=>countContex.counterDispatch('decrement')}>Decrement</button>
    </div>
  )
}

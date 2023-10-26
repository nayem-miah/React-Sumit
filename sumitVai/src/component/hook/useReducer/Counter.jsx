import React from 'react'
import { useReducer } from 'react'

const initialState = 5;
const reducer = (state,action) => {

    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state; 
    }

}


export default function Counter() {
     
    const [count,dispatch] = useReducer(reducer, initialState);


  return (
    <div>
        <div>count  {count}</div>
        <button type='button' onClick={()=> dispatch('increment')}>Incremnet</button>
        <button type='button' onClick={()=> dispatch('decrement')}>Decrement</button>
    </div>
  )
}

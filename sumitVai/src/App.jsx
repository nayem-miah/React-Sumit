
import React, { Component } from 'react'
// import WithClass from './component/hook/withClass'
import UseStateHook from './component/hook/useStateHook'
import UseEffectHook from './component/hook/useEffectHook'



export default function App() {

  const [show, setShow] = React.useState(true)
  return (
       <div>
          
        <div> {show && <UseEffectHook/> }</div>

        <p>

          <button type='button' onClick={()=> setShow((prevShow)=> !prevShow)}>
            {show ? 'Hide post' : 'SHow post'}
          </button>
        </p>



        {/* <WithClass/> */}
      {/* <UseStateHook/> */}
    
      
    </div>
  )
}



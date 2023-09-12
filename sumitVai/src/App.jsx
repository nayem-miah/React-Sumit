import { useState } from 'react'
import './App.css'
import Clock2 from './componets/clock/Clock2'
import Clock3 from './componets/clock/Clock3'
import ClockList from './componets/clock/ClockList'
import Form from './componets/Form'
// import Calculator from './componets/lifting-State-Up/Calculator'
// import Calculator from './componets/cm-inch-lifting-state-up/Calculator'
// import ClickCount from './componets/higher-oerder-components/ClickCount'
// import HoverCounter from './componets/higher-oerder-components/HoverCounter'
import ClickCounter from './componets/HOC/ClickCounter'
import HoverMouse from './componets/HOC/HoverMouse'

function App() {
  // const quantities = [1,3,5,23]
  return (
    <>
      {/* <Clock2 local="bn-BD"/>

      <Clock3/> */}
      {/* <ClockList quantity={quantities} /> */}

     {/* <Form/> */}
     {/* <Calculator/> */}
     {/* <ClickCount/>     */}
     {/* <HoverCounter/>   */}
     <ClickCounter/>
     <HoverMouse/>
    </>
  )
}

export default App

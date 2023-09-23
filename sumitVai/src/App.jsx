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
import ClickCounter from './componets/Render_Props/ClickCounter'
import HoverMouse from './componets/Render_Props/HoverMouse'
import Counter from './componets/Render_Props/Counter'
import Section from './componets/context-api/Section'
import themeContext from './componets/context-api/context/themeContext'
import ContentCom from './componets/context-api-2/ContentCom'

import clickContext from './componets/context-api-2/context'

import React, { Component } from 'react'

export default class App extends Component {

   state = {
    theme: 'dark',
    clickHandler:() =>{
      console.log('you have clicked here....')
     },

   }

  switchHandler = ()=>{
    this.setState(({theme})=>{
        if (theme === 'dark'){
          return {
            theme: 'light'
          }
        
        }
        else {
          return {
            theme: 'dark'
          }
        }
    })
  }




  render() {

    
    return (
      <> 
      {/* <Clock2 local="bn-BD"/>

      <Clock3/> */}
      {/* <ClockList quantity={quantities} /> */}

     {/* <Form/> */}
     {/* <Calculator/> */}
     {/* <ClickCount/>     */}
     {/* <HoverCounter/>   */}
     {/* <ClickCounter/>
     <HoverMouse/>     */}


    {/* // render props....................................................................
     <Counter Renfunc = {(counter,incrementCount)=>(
           <ClickCounter count={counter} incrementCount={incrementCount} />
           
           )} 
      />
    <Counter Renfunc = {(count, handler)=> (
        <HoverMouse count = {count} handler={handler} />
    )}/> */}
    

   {/* // context api............................................................
    <themeContext.Provider value ={{theme:theme, switchHandler:this.switchHandler}}> 
    
          <Section/>  
    
    </themeContext.Provider>  */}




<clickContext.Provider value={this.state}>

   <ContentCom/>

</clickContext.Provider>





    </>
    ) 
  }
}



// function App() {
  //   // const quantities = [1,3,5,23]
  //   return (
  //     <>
  //       {/* <Clock2 local="bn-BD"/>
  
  //       <Clock3/> */}
  //       {/* <ClockList quantity={quantities} /> */}
  
  //      {/* <Form/> */}
  //      {/* <Calculator/> */}
  //      {/* <ClickCount/>     */}
  //      {/* <HoverCounter/>   */}
  //      {/* <ClickCounter/>
  //      <HoverMouse/>     */}
  
  //      <Counter Renfunc = {(counter,incrementCount)=>(
  //            <ClickCounter count={counter} incrementCount={incrementCount} />
             
  //            )} 
  //       />
  //     <Counter Renfunc = {(count, handler)=> (
  //         <HoverMouse count = {count} handler={handler} />
  //     )}/>
      
  //      <Section/>
  
  //     </>
  //   )
  // }
  
  // export default App
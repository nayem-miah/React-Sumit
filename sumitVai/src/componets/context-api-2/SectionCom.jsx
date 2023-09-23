// function component context api with hook .................................

import React from 'react'
import { useContext } from 'react'
import clickContext from './context'
import HoverCom from './HoverCom'


export default function SectionCom() {

    const context = useContext(clickContext)
    const {clickHandler} = context

  return (
    <div>

     <HoverCom clickHandler={clickHandler}/>
  
    
    </div>
  )
}







// // class component first way context api..........................
// import React, { Component } from 'react'
// import HoverCom from './HoverCom'
// import clickContext from './context'
// export default class SectionCom extends Component {
//     componentDidMount(){
//         console.log(this.context)
//     }
//   render() {  

//     const {clickHandler}= this.context
    
//     return (
//       <div>

//         <h3>this is section component</h3>
         
//         <HoverCom clickHandler={clickHandler}/>

//       </div>

//     )
//   }
// }

// SectionCom.contextType = clickContext;











//// class component second way context api.............................................

// import React, { Component } from 'react'
// import HoverCom from './HoverCom'
// import clickContext from './context'
// export default class SectionCom extends Component {
//   render() {
//     return (
//       <div>
//         <h3>this is section component</h3>
//         <clickContext.Consumer>

//         {({clickHandler})=>(

//              <HoverCom clickHandler={clickHandler}/>

//              )}

//        </clickContext.Consumer>
       
//       </div>
//     )
//   }
// }

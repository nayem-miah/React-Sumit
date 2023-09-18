import React from 'react'
import Counter from './Counter'
import ClickCounter from './ClickCounter'
import HoverMouse from './HoverMouse'
import themeContext from './context/themeContext'
export default function Content() {
  return (
     <div>

      <h3>This is content component </h3>
         
         <Counter>

            {(count, handler) =>(
               <themeContext.Consumer> 

                  {({theme})=>(
                      <HoverMouse count={count} handler={handler} theme={theme}/>
                                 )}

               </themeContext.Consumer>
         
            )}
        </Counter>

    </div>
  )
}

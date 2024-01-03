import Section from './componets/context-api/Section'
import themeContext from './componets/context-api/context/themeContext'
import ContentCom from './componets/context-api-2/ContentCom'
import clickContext from './componets/context-api-2/context'
import React, { Component } from 'react'
export default class ContextApp extends Component {

    
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

      
        <themeContext.Provider value ={{theme:this.state.theme, switchHandler:this.switchHandler}}> 
    
           <Section/> 
    
        </themeContext.Provider> 

        <clickContext.Provider value={this.state}>

           <ContentCom/>

        </clickContext.Provider>

      </>
    ) 
  }
}

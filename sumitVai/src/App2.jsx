// this is about Global useReducer hook uses
import React from 'react'
import { useReducer } from 'react'
import ComponentA from './component/hook/useReducer/globalReducer/ComponentA';

const initialState = 0;
export const counterContext = React.createContext()
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

export default function App2() {

    const [count,dispatch] = useReducer(reducer, initialState);

        return(
        <div className='app'>
        
            <div>Count: {count}</div>


            <counterContext.Provider value={{counterDispatch: dispatch}}>
                <ComponentA/>
            </counterContext.Provider>
            

        </div>
        )

} 



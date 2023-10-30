//with useReducer............................

 import React from 'react'


 const initialState = {
    loading: true,
    error: "",
    post: {}
}

const reducer = (state, action)=>{
   
    switch(action.type){
        case 'success':
            return{
                loading: false,
                post: action.result,
                error: ''
            }
        case 'error':
            return{
                loading: false,
                post: {},
                error: 'there was an error!'
            };
        default:
            return state;
    }
}
 

 
 export default function GetPost2() {
  
    const [state, dispatch] = React.useReducer(reducer, initialState);


    React.useEffect(() =>{
 
        fetch('http://jsonplaceholder.typicode.com/posts/5')
           .then((response) => response.json())
           .then((data) => {
              dispatch({type: 'success', result:data});
           })
           .catch(() => { 
            dispatch({type: 'error'});
   
           })
   },[]);



   return (
     <div>
        <h1>{state.post.id}</h1>
        <h1>{state.post.title}</h1>
        <h1>{state.post.body}</h1>
        {state.error || null }
     </div>
   )
 }
   
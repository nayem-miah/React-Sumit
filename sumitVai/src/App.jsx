import React, { useCallback } from 'react'
import Button from './component/hook/useMemoUseCallback/Button'
import ShowCount from './component/hook/useMemoUseCallback/ShowCount'
import Title from './component/hook/useMemoUseCallback/Title'
import Form from './component/hook/useRef/Form'
import CounterLast from './component/hook/useReducer/CountLast'
import GetPost from './component/hook/useReducer/GetPost'
import GetPost2 from './component/hook/useReducer/GetPost2'
import LayoutComponent from './component/hook/customHook/LayoutComponent'
import LayoutComponentTwo from './component/hook/customHook/LayoutComponentTwo'
export default function App() {

  const [count1, setCount1] = React.useState(0)
  const [count2, setCount2] = React.useState(0)



  const increatentByOne = React.useCallback(()=>{
    setCount1((prevCount)=> prevCount+1)
   },[])

  const increatentByFive = React.useCallback(()=>{
    setCount2((prevCount)=> prevCount+5)
    },[])

// the above two function we used useCallback hook to stop run togeher when a single component render



const isEvenOrOdd = React.useMemo(()=>{
  let i = 0;
  while(i < 1000000000) i +=1;
  return  count1 % 2 == 0;
},[count1])

// useMemo function ar return value mone rakhe 
// aknae jokhon count1 ar value chnage hobe then the function work otherwise not


// // useMemo hook and useCallback hook ..........
//   return (
//     <div>
//       <Title/>
//       <ShowCount count={count1}/>
//       <Button title={'Count 1'} increatent={increatentByOne}/>
//       <span>{isEvenOrOdd ? 'even' : 'odd'}</span>
//       <ShowCount count={count2}/>
//       <Button title={'Count 5'} increatent={increatentByFive}/>
//     </div>
//   )
// // useMemo hook and useCallback hook ..............



// // useRef........................


// return(
//   <div>
   
//    {/* <Form/> */}
//    {/* <CounterLast/> */}
//    {/* <GetPost/> */}
//    <GetPost2/>

//   </div>
// )
// // useRef........................



// custom hook

return(
  <div>
     <h1>this is custom hook</h1>
     {/* <LayoutComponent/> */}
     <LayoutComponentTwo/>



  </div>
)



// custom hook



} 


























// // this function is for UseState and useEffect hook
// import React, { Component } from 'react'
// // import WithClass from './component/hook/withClass'
// import UseStateHook from './component/hook/useStateUseEffect/useStateHook'
// import UseEffectHook from './component/hook/useStateUseEffect/useEffectHook'



// export default function App() {

//   const [show, setShow] = React.useState(true)
//   return (
//        <div>
          
//         <div> {show && <UseEffectHook/> }</div>

//         <p>

//           <button type='button' onClick={()=> setShow((prevShow)=> !prevShow)}>
//             {show ? 'Hide post' : 'SHow post'}
//           </button>
//         </p>



//         {/* <WithClass/> */}
//       {/* <UseStateHook/> */}
    
      
//     </div>
//   )
// }



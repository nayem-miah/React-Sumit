import React from 'react'

export default function UseStateHook() {

  const [count, setCounter] = React.useState(0)

  const clickHandler = ()=>{
    setCounter((prevState) => prevState+1)
  }

  return (
    <div>
        <h2>{count}</h2>

        <button onClick={clickHandler}>

          add 1
        
        </button>

    </div>
  )
}






// import React from 'react'

// export default function WithFunction() {
  
//     const [valu, setValue] = React.useState("")

//     const clickHandler = (evt) => {
//         setValue (evt.target.value)
//        }
     

//   return (
//     <div>
      
//       <input placeholder='Enter text...' onChange={clickHandler} type="text" />
//       <h2>{valu}</h2>
    
//     </div>
//   )
// }

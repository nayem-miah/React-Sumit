


// // with class and life cycle method
// import React, { Component } from 'react'

// export default class UseEffectHook extends Component {

//    state = {
//     count: 0,
//     date : new Date(),
//    } 


//   addClickHandler = ()=>{
//     this.setState(({count})=>({
//         count: count + 1
//     }))
//   }

//   componentDidMount(){
//     const {count} = this.state
//     document.title = `clicked ${count} times`
//     setInterval(this.tick, 1000)
//   }

//   componentDidUpdate(){
//     const {count} = this.state
//     document.title = `clicked ${count} times`
//   }

//   tick = ()=>{
//     this.setState({
//         date: new Date()
//     })
//   }
//   render() {

//     const { date } = this.state
//     return (
//       <div>

//          <p>Time: {date.toLocaleTimeString()}</p>
 
//          <p>
//          <button onClick={this.addClickHandler} type='button'>Click</button>
//          </p>

//       </div>
//     )
//   }
// }


// with functions hook  


import React from 'react'

export default function useEffectHook() {

  const[count, setCount] = React.useState(0)
  const [text, setText] = React.useState('')
  const [clock, setClock] = React.useState(new Date())

  
  const  addClickHandler = () => {
          setCount((prevCount)=> prevCount+1)
          
  }

  const changeHandler = (e) => {
       setText(e.target.value)
  }

  const thik = ()=> {
      setClock(new Date())
      console.log('thik...')
  }
  


  // React.useEffect(()=>{
  //   setInterval(thik, 1000)
  //   console.log('this is test.....')
  // });
  // // the above useEffect function will be called per rendering again and again



  
  React.useEffect(()=>{
    const interval = setInterval(thik, 1000)
    // when setInterval is called, it will be working on in deffrent atmostphare 
    // and never stops until clearInterval is called.

    return ()=>{
      clearInterval(interval)
    }
  },[]);
  // the above useEffect function will be called 1 time but setInterval working again and again



  React.useEffect(()=>{

    document.title = `Clicked ${count} times`
    
  }, [count])
  // the above useEffect function will be called only when it's a work of 'count' state


 

  return (
    <div>

      <p>Time: {clock.toLocaleTimeString()}</p>
      <p>{count}</p>
      
      <p>
          <button onClick={addClickHandler} type='button'>Click</button>
      </p>
       <input onChange={changeHandler} type="text" />
       <h3>{text}</h3>
    </div>
  )
}

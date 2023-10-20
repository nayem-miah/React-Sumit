import React from 'react'
import Input from './Input'


export default function Form() {
     const inputRef = React.useRef(null)

    // when component loaded useEffect will work
    React.useEffect(() => {
        
       inputRef.current.focus()
       console.log('hi this is nayem...')


    },[])

    console.log('hi this is nayem...')

  return (
    <div>
      <p>
        <h1>this is Form</h1>
          <Input ref={inputRef} type="text" placeholder="hi enter text"/>
      </p>
    </div>
  )
}


import React from 'react'
const temparatureScale = {
    c: 'celsius',
    f: 'fahrenheit'
}


function TemperatureInput({scale,temparature, inputHandler}) {
  return (
    <div>
         <form action="">

           <h3> Input {temparatureScale[scale]} temparature</h3>

           <input  value={temparature} onChange={(e) => inputHandler(e,scale)} type="text" placeholder='Enter a temprature' />

        </form>
       
      </div>
  )
}

export default TemperatureInput

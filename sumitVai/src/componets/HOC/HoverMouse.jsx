import React from 'react'
import withCounter from './WithCounter'

const HoverMouse=(props)=> {
    const {count, handeler} = props
  return (
    <div>
      <h1 onMouseOver={handeler}>total counts {count}</h1>
    </div>
  )
}
export default withCounter(HoverMouse)



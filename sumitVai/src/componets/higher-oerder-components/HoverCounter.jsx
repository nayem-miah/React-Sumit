

import withCounter from './withCounter'
import React from 'react'

const HoverCounter = (props)=> {
    const {count,countHandler} = props
  return (
    <div>
       <h1 onMouseOver={countHandler} > Clicked {count} times </h1>
    </div>
  )
}

export default withCounter(HoverCounter)



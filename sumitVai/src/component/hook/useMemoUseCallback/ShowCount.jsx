import React from 'react'

function ShowCount({count}) {
    console.log('this is showing count', count)
  return (
    <div>
      <h2>{count}</h2>
    </div>
  )
}
export default React.memo(ShowCount)


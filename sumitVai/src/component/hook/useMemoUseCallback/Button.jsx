import React from 'react'

function Button({increatent, title}) {
    console.log('this is button..', title)
  return (
    <div>
      <button type='button' onClick={increatent}>{title}</button>
    </div>
  )
}
export default React.memo(Button)








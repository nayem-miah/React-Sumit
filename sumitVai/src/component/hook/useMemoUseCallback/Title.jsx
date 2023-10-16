import React from 'react'

function Title() {

  console.log('this is title ..........')
  return (
    <div>
      <h3>UseCallback hook</h3>
    </div>
  )
}
export default React.memo(Title)
// here we used memo hook to stop render unnecessary
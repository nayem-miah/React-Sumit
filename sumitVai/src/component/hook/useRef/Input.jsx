import React from 'react'

function Input({type, placeholder},ref) {
  return (
    <div>
      <input ref={ref} placeholder={placeholder} text  type={type} />
    </div>
  )
}

// it's bringing ref from Form.jsx
const forwardRef = React.forwardRef(Input)
export default forwardRef

import React from 'react'

import useSizeHook from './useSizeHook'

export default function LayoutComponent() {

  const screenSize =useSizeHook(768)

  return (
    <div>
      <h1>You are on {screenSize ? 'small' : 'large'} device</h1>
    </div>
  )
}

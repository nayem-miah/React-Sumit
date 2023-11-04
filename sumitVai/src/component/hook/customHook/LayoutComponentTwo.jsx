import React from 'react'
import useSizeHook from './useSizeHook'

export default function LayoutComponentTwo() {

const layoutClass = useSizeHook(768)


  return (
    <div>
      <h1 clasNmae={layoutClass ? 'smale' : 'large'}>this is second LayoutComponent</h1>
    </div>
  )
}

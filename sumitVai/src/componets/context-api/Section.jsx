import React from 'react'
import Content from './Content'
export default function Section({theme}) {
  return (
    <div>
        <h3>This is a section component</h3>
        <Content theme={theme}/>
    </div>
  )
}

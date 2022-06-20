import React from 'react'
import Child from '../child'
import './style.scss'

const Parent = () => {
  return (
    <div className="parent-element">
      <h1>This is parent element</h1>
      <Child />
    </div>
  )
}

export default Parent

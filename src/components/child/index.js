import React from 'react'
import { useNotify } from '../../hooks/useNotify'
import './style.scss'

const Child = () => {
  const { setNotify } = useNotify()
  const sample1Handler = () => {
    setNotify({
      open: true,
      color: 'info',
      message: 'This is a sample notification with material ui.',
      vertical: 'top',
    })
  }
  const sample2Handler = () => {
    setNotify({
      open: true,
      color: 'success',
      message: 'Success and bottom notification.',
      vertical: 'bottom',
    })
  }
  return (
    <div className="child-element">
      <button onClick={sample1Handler}>Show sample notification 1</button>
      <button onClick={sample2Handler}>Show sample notification 2</button>
    </div>
  )
}

export default Child

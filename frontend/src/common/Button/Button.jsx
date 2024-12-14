import React from 'react'
import './Button.css'

const Button = ({onClick,content}) => {
  return (
    <div>
      <button className="gradient-button" onClick={onClick}>{content}</button>
    </div>
  )
}

export default Button
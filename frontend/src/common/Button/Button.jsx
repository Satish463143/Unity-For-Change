import React from 'react'
import './Button.css'

const Button = ({content}) => {
  return (
    <div>
      <button class="gradient-button">{content}</button>
    </div>
  )
}

export default Button
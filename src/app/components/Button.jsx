import React from 'react'
import './Button.css'
const Button = ({label}) => {
  return (
     <>
      <button className="blog-btn">
             <img src='/Layer_x0020_1.png' alt="icon" className="icon" />
            {label}
           </button>
        </>
  )
}
export default Button
import React from 'react'
import './Button.css'

const Button = ({ handleClick, children, text }) => {
    return (
        <div className='btn-container'>
            {children}
            <button id='click-btn' onClick={handleClick}>
                {text}
            </button>
        </div>
    )
}

export default Button

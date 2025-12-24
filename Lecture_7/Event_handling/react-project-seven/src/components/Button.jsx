import React from 'react'
import './Button.css'

const Button = ({ onClick, children, type }) => {
    return (
        <button className='custom-btn' onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button

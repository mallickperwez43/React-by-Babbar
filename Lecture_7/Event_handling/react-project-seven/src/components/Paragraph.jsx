import React from 'react'
import './Paragraph.css'

const Paragraph = ({ onMouseEnter, onMouseLeave, children }) => {
    return (
        <p className='custom-para' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
        </p>
    )
}

export default Paragraph

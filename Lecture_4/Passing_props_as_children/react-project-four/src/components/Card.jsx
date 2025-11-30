import React from 'react'
import './Card.css'

const Card = ({ name, children }) => {
    return (
        <div className='card-container'>
            {name}
            {children}
        </div>
    )
}

export default Card

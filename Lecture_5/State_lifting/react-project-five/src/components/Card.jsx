import React from 'react'
import './Card.css'

const Card = ({ title, name, setName }) => {
    return (
        <div id='card-container'>
            <input
                type="text"
                id='card-input-field'
                className='card-input'
                placeholder='Enter value here'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="card-input-field" className='card-label'>Value entered in {title} is : {name} </label>
        </div>
    )
}

export default Card

import React from 'react'
import './Form.css'

const Form = ({ handleSubmit, children }) => {
    return (
        <form className='custom-form' onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default Form
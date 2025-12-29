import React from 'react'
import ChildC from './ChildC'

const ChildB = () => {

    return (
        <div className='border border-white/30 rounded-xl p-4'>
            <p className='font-semibold mb-2'>Child B</p>
            <ChildC />
        </div>
    )
}

export default ChildB

import React from 'react'
import ChildB from './ChildB'

const ChildA = () => {

    return (
        <div className='border border-white/30 rounded-xl p-4 mb-3'>
            <p className='font-semibold mb-2'>Child A</p>
            <ChildB />
        </div>
    )
}

export default ChildA

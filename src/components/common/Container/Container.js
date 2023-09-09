import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='flex w-full'>
            {children}
        </div>
    )
}

export default Container
import React from 'react'
import errorGif from 'assets/icons/404.gif';

const NotFound = () => {
    return (
            <div className='flex justify-center mt-20'>
                <img className='rounded-full w-2/4' src={errorGif} alt="404" />
            </div>
    )
}

export default NotFound
import React from 'react'
import errorGif from 'assets/icons/404.gif';
import AdminLayout from 'layouts/AdminLayout';

const NotFound = () => {
    return (
        <AdminLayout>
            <div className='m-auto mx-20 mt-6'>
                <img className='rounded-full w-4/4' src={errorGif} alt="404" />
            </div>
        </AdminLayout>
    )
}

export default NotFound
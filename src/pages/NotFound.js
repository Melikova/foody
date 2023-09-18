import React from 'react'
import errorGif from 'assets/icons/404.gif';
import AdminLayout from 'layouts/AdminLayout';

const NotFound = () => {
    return (
        <AdminLayout>
            <div className='m-auto mt-6'>
                <img className='rounded-full' src={errorGif} alt="404" />
            </div>
        </AdminLayout>
    )
}

export default NotFound
import React from 'react'

const ProductItemsContainer = ({ children }) => {
    return (
        <>
            <div className='flex max-md:justify-center max-md:ml-4 flex-wrap'>
                {children}
            </div>
        </>
    )
}

export default ProductItemsContainer
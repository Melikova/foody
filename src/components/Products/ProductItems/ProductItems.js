import React from 'react'
import ProductItem from 'components/Products/ProductItems/ProductItem/ProductItem'
import ProductItemsContainer from 'components/common/Container/ProductItemsContainer'


const ProductItems = () => {
    return (
        <>
            <ProductItemsContainer>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </ProductItemsContainer>
        </>
    )
}

export default ProductItems
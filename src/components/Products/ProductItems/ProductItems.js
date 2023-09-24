import React from 'react'
import ProductItem from 'components/Products/ProductItems/ProductItem/ProductItem'
import ProductItemsContainer from 'components/common/Container/ProductItemsContainer'
import { useProductsData } from 'hooks/useProductsData'
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from 'react-redux';


const ProductItems = () => {

    const selProducts = useSelector((state) => state.products.productsData )

    const onSuccess = (data) => {
        console.log("Məhsullar uğurla yüklənildi!", data);
    }

    const onError = (error) => {
        console.log("Gözlənilməyən xəta baş verdi!", error);
    }

    const { isLoading, data, isError, error } = useProductsData(onSuccess, onError)

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "#C74FEB",
    };

    if (isLoading) {
        return <ClipLoader
            cssOverride={override}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    }

    const getProducts = () => {
        return selProducts?.data.result.data.map((product) => (
            <ProductItem key={product.id} {...product} />
        ))
    }



    return (
        <>
            <ProductItemsContainer>
                {
                    getProducts()
                }
            </ProductItemsContainer>
        </>
    )
}

export default ProductItems
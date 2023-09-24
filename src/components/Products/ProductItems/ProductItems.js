import React from 'react'
import ProductItem from 'components/Products/ProductItems/ProductItem/ProductItem'
import ProductItemsContainer from 'components/common/Container/ProductItemsContainer'
import { useProductsCategory, useProductsData, useProductsFilteredData } from 'hooks/useProductsData'
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from 'react-redux';
import { useActionData, useParams } from 'react-router-dom';

const ProductItems = () => {

    const selProducts = useSelector((state) => state.products.productsData)
    const selFilteredProducts = useSelector((state) => state.products.productCategoryID)

    const onSuccess = (data) => {
        console.log("Məhsullar uğurla yüklənildi!", data);
        console.log(data);
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

    const getProductsOnPageLoad = () => {
        return selProducts?.result.data.map((product) => (
            <ProductItem key={product.id} {...product} />
        ))
    }

    const getProducts = () => {
        return data?.data.result.data.map((product) => (
            <ProductItem key={product.id} {...product} />
        ))
    }

    const getFilteredProducts = () => {
        const filteredProducts = data?.data.result.data.filter((product) => (
            product['rest_id'] !== selFilteredProducts
        ))
        return filteredProducts.map((product) => (
            <ProductItem key={product.id} {...product} />
        ))
    }

    return (
        <>
            <ProductItemsContainer>
                {
                    selFilteredProducts || (selProducts && selFilteredProducts) ? getFilteredProducts() : selProducts ? getProductsOnPageLoad() : getProducts()
                }
            </ProductItemsContainer>
        </>
    )
}

export default ProductItems
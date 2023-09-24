import fetchFilteredProducts from "api/fetchFilteredProducts";
import fetchProductsData from "api/fetchProducsData";
import fetchProductsCategory from 'api/fetchProductsCategory'
import { useQuery } from "react-query"

export const useProductsData = (onSuccess, onError) => {
    return useQuery(
        'products',
        fetchProductsData,
        {
            refetchOnMount: true,
            onSuccess,
            onError,
        })
}

export const useProductsFilteredData = (onSuccess, onError) => {
    return useQuery(
        "filteredProducts",
        fetchFilteredProducts,
        {
            onSuccess,
            onError,
        }
    )
}

export const useProductsCategory = (onSuccess, onError) => {
    return useQuery(
        'productsCategory',
        fetchProductsCategory,
        {
            onSuccess,
            onError,
        })
}
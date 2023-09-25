import fetchFilteredProducts from "api/fetchFilteredProducts";
import fetchProductsData from "api/fetchProducsData";
import fetchProductsCategory from 'api/fetchProductsCategory'
import updateProductData from 'api/updateProductData'
import { useMutation, useQuery, useQueryClient } from "react-query"

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

export const useUpdateProductData = () => {
    const queryClient = useQueryClient()
    return useMutation(updateProductData, {
        onSuccess: (data) => {
            console.log(data);
            // toast.success("istifadəçinin məlumatları uğurla yeniləndi")
            queryClient.invalidateQueries('updateProducts')
            console.log("ugurlu oldu");
            // queryClient.setQueryData('updateProducts', (oldQueryData) => {
            //     return {
            //         ...oldQueryData,
            //         data: [...oldQueryData.data, data.data]
            //     }
            // })
        }
    })
}
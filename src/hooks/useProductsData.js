import fetchProductsData from "api/fetchProducsData"
import { useQuery } from "react-query"

export const useProductsData = (onSuccess, onError) => {
    return useQuery(
        'products',
        fetchProductsData,
        {
            onSuccess,
            onError,
        })
}

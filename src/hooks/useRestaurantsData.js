import fetchRestaurantsData from "api/fetchRestaurantsData"
import { useQuery } from "react-query"

const useRestaurantsData = (onSuccess, onError) => {
    return useQuery(
        'products',
        fetchRestaurantsData,
        {
            onSuccess,
            onError,
        })
}

export default useRestaurantsData
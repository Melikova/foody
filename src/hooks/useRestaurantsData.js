import fetchRestaurantsData from "api/fetchRestaurantsData"
import { useQuery } from "react-query"

const useRestaurantsData = (onSuccess, onError) => {
    return useQuery(
        'restaurants',
        fetchRestaurantsData,
        {
            onSuccess,
            onError,
        })
}


// export const useRestaurantsCategory = (onSuccess, onError) => {
//     return useQuery(
//         'restaurantsCategory',
//         fetchRestaurantsCategory,
//         {
//             onSuccess,
//             onError,
//         }
//     )
// }

export default useRestaurantsData

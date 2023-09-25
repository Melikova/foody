import React from 'react'
import RestaurantItemsContainer from 'components/Restaurants/RestaurantItemsContainer/RestaurantItemsContainer'
import RestaurantItem from 'components/Restaurants/RestaurantItems/RestaurantItem/RestaurantItem'
import useRestaurantsData from 'hooks/useRestaurantsData'
import { ClipLoader } from 'react-spinners'
import { useSelector } from 'react-redux'

const RestaurantItems = () => {

  const selRestaurants = useSelector((state) => state.restaurants.restaurantsData)
  const selFilteredRestaurants = useSelector((state) => state.restaurants.restaurantCategoryID)

  const onSuccess = (data) => {
    console.log("Məhsullar uğurla yüklənildi!", data);
  }

  const onError = (error) => {
    console.log("Gözlənilməyən xəta baş verdi!", error);
  }

  const { isLoading, data, isError, error } = useRestaurantsData(onSuccess, onError)
  
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

  const getRestaurantsOnPageLoad = () => {
    return selRestaurants?.result.data.map((restaurant) => (
      <RestaurantItem key={restaurant.id} {...restaurant} />
    ))
  }

  const getRestaurants = () => {
    return data?.data.result.data.map((restaurant) => (
      <RestaurantItem key={restaurant.id} {...restaurant} />
    ))
  }

  const getFilteredRestaurants = () => {
    const filteredRestaurants = data?.data.result.data.filter((restaurant) => (
      restaurant['category_id'] !== selFilteredRestaurants
    ))
    return filteredRestaurants.map((restaurant) => (
      <RestaurantItem key={restaurant.id} {...restaurant} />
    ))
  }

  return (
    <>
      <RestaurantItemsContainer>

        {
          selFilteredRestaurants || (selRestaurants && selFilteredRestaurants) ? getFilteredRestaurants() : selRestaurants ? getRestaurantsOnPageLoad() : getRestaurants()
        }

      </RestaurantItemsContainer>
    </>
  )
}

export default RestaurantItems
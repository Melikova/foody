import React from 'react'
import RestaurantItemsContainer from 'components/Restaurants/RestaurantItemsContainer/RestaurantItemsContainer'
import RestaurantItem from 'components/Restaurants/RestaurantItems/RestaurantItem/RestaurantItem'
import useRestaurantsData from 'hooks/useRestaurantsData'
import { ClipLoader } from 'react-spinners'

const RestaurantItems = () => {

  const onSuccess = (data) => {
    console.log("Məhsullar uğurla yüklənildi!", data);
  }

  const onError = (error) => {
    console.log("Gözlənilməyən xəta baş verdi!", error);
  }

  const { isLoading, data, isError, error } = useRestaurantsData(onSuccess, onError)
  console.log(data);
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

  const getRestaurants = () => {
    return data?.data.result.data.map((restaurant) => (
      <RestaurantItem key={restaurant.id} {...restaurant} />
    ))
  }

  return (
    <>
      <RestaurantItemsContainer>

        {
          getRestaurants()
        }

      </RestaurantItemsContainer>
    </>
  )
}

export default RestaurantItems
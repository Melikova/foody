import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import baseUrl from 'api/baseUrl'
import axios from 'axios'

const initialState = {
    restaurantsData: null,
    restaurantCategoryID: ''
}

export const getRestaurantsData = createAsyncThunk('restaurants/getRestaurantsData', async () => {
    const response = await axios.get(`${baseUrl}/api/restuarants`, {
        headers: 'accept: application/json',
    });
    return response.data
})

export const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        handleRestaurantsCategories: (state, action) => {
            state.restaurantCategoryID = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRestaurantsData.fulfilled, (state, action) => {
            state.restaurantsData = action.payload
        })
    }
})

export const { handleRestaurantsCategories } = restaurantSlice.actions

export default restaurantSlice.reducer
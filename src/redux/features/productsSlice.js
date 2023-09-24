import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import baseUrl from 'api/baseUrl'
import axios from 'axios'
import { Hand } from 'heroicons-react'

const initialState = {
    productsData: null,
    productCategoryID: ''
}

export const getProductsData = createAsyncThunk('products/getProductsData', async () => {
    const response = await axios.get(`${baseUrl}/api/products`, {
        headers: 'accept: application/json',
    });
    return response.data
})


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:
    {
        handleProductCategoryID: (state, action) => {
            state.productCategoryID = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsData.fulfilled, (state, action) => {
            state.productsData = action.payload
        })
    }
})

export const { handleProductCategoryID } = productsSlice.actions

export default productsSlice.reducer
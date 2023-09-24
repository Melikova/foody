import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productsData: null,
}

export const langSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        handleProducts: (state, action) => {
            state.productsData = action.payload;
        }
    }
})

export const { handleFlag, handleActiveFlag } = langSlice.actions

export default langSlice.reducerpro
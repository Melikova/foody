import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    langParam: "",
    isActive: false,
}

export const langSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        handleFlag: (state, action) => {
            state.langParam = action.payload;
            localStorage.setItem('lang', action.payload)
        },
        handleActiveFlag: (state) => {
            state.isActive = !state.isActive
        }
    }
})

export const { handleFlag, handleActiveFlag } = langSlice.actions

export default langSlice.reducer
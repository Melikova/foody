import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    langParam: "",
}

export const langSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        handleFlag: (state, action) => {
            state.langParam = action.payload;
            localStorage.setItem('lang', action.payload)
        }
    }
})

export const { handleFlag } = langSlice.actions

export default langSlice.reducer
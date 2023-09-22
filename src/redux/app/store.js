import { configureStore } from '@reduxjs/toolkit'
import modalReducer from 'redux/features/modalSlice';
import languageReducer from 'redux/features/langSlice';
import productsReducer from 'redux/features/productsSlice'
import restaurantsReducer from 'redux/features/restaurantsSlice'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        language: languageReducer,
        products: productsReducer,
        restaurants: restaurantsReducer
    },
})
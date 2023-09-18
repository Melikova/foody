import { configureStore } from '@reduxjs/toolkit'
import modalReducer from 'redux/features/modalSlice';
import languageReducer from 'redux/features/langSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        language: languageReducer
    },
})
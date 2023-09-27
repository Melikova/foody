import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive: false,
    modalActive: false,
    resModalActive: false,
    delModal: false,
    addProductModal: false,
    addResModal: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalEdit: (state) => {
            state.isActive = true;
        },
        closeModalEdit: (state) => {
            state.isActive = false
        },
        openModal: (state) => {
            state.modalActive = true;
        },
        closeModal: (state) => {
            state.modalActive = false;
        },
        openResModalEdit: (state) => {
            state.resModalActive = true;
        },
        closeResModalEdit: (state) => {
            state.resModalActive = false;
        },
        openDelModal: (state) => {
            state.delModal = true;
        },
        closeDelModal: (state) => {
            state.delModal = false;
        },
        addProductModal: (state) => {
            state.addProductModal = true;
        },
        closeProductModal: (state) => {
            state.addProductModal = false;
        },
        addResModal: (state) => {
            state.addResModal = true;
        },
        closeAddResModal: (state) => {
            state.addResModal = false;
        }
    }
})

export const { openModalEdit, closeModalEdit, openModal, closeModal, openResModalEdit, closeResModalEdit, openDelModal, closeDelModal, addProductModal, closeProductModal, addResModal, closeAddResModal } = modalSlice.actions

export default modalSlice.reducer
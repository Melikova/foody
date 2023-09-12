import React from 'react'
import style from 'components/Restaurants/AddResBtn/addresbtn.module.css'
import plusBtn from 'assets/icons/plusBtn.svg'
import { useDispatch } from 'react-redux'
import { addResModal } from 'redux/features/modalSlice'

const AddResBtn = () => {

    const dispatch = useDispatch((state) => state.modal.addResModal)

    return (
        <>

            <div className='ml-5 max-md:ml-0'>
                <button onClick={() => dispatch(addResModal())} className={style['restaurant-btn']}>
                    <img src={plusBtn} alt="plus-button" />
                    ADD RESTAURANTS
                </button>
            </div>

        </>
    )
}

export default AddResBtn
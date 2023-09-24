import React from 'react'
import style from 'components/Restaurants/AddResBtn/addresbtn.module.css'
import plusBtn from 'assets/icons/plusBtn.svg'
import { useDispatch } from 'react-redux'
import { addResModal } from 'redux/features/modalSlice'
import { useTranslation } from 'react-i18next'

const AddResBtn = () => {

    const dispatch = useDispatch((state) => state.modal.addResModal)

    const {t} = useTranslation()

    return (
        <>

            <div className='ml-5 max-md:ml-0'>
                <button onClick={() => dispatch(addResModal())} className={style['restaurant-btn']}>
                    <img src={plusBtn} alt="plus-button" />
                    {t('ADD RESTAURANTS')}
                </button>
            </div>

        </>
    )
}

export default AddResBtn
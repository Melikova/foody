import React from 'react'
import styles from 'components/Restaurants/RestaurantItems/RestaurantItem/restaurantitem.module.css'
import PapaJohns from 'assets/images/foodImages/PapaJohnsImg.svg'
import editImg from 'assets/icons/edit.svg';
import trashImg from 'assets/icons/trash.svg';
import { useDispatch } from 'react-redux'
import { openDelModal, openResModalEdit } from 'redux/features/modalSlice';
import { motion } from "framer-motion";

const RestaurantItem = () => {

  const dispatch = useDispatch()

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <motion.div
        variants={item}
        className='flex items-center justify-between bg-white w-60 max-md:w-64 h-20 mr-9 mb-9 pl-3 pr-1 pb-2.5 pt-2 rounded-md max-[420px]:mr-0'
        id={styles['restaurant-card']}
      >
        <div>
          <img src={PapaJohns} alt="papa-johns" />
        </div>
        <div className={styles['restaurant-detail']}>
          <h3>Papa John's</h3>
          <span>Pizza</span>
        </div>
        <div className='flex flex-col'>
          <button onClick={() => dispatch(openDelModal())} className='mb-4'>
            <img src={trashImg} className='w-6' alt="trash-button" />
          </button>
          <button onClick={() => dispatch(openResModalEdit())}>
            <img src={editImg} className='w-6' alt="edit-button" />
          </button>
        </div>
      </motion.div>
    </>
  )
}

export default RestaurantItem
import React from 'react'
import styles from 'components/Products/ProductItems/ProductItem/productitem.module.css'
import noFood from 'assets/images/foodImages/no-food.png'
import editImg from 'assets/icons/edit.svg';
import trashImg from 'assets/icons/trash.svg';
import { useDispatch } from 'react-redux'
import { openModal, openModalEdit } from 'redux/features/modalSlice';
import { motion } from "framer-motion";


const ProductItem = ({ id, ...props }) => {
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
                key={id}
                className={styles["product-bg"]}
                variants={item}
            >
                <div className={styles['product-detail']}>
                    <div>
                        <img className={styles['food-img']} src={props?.img_url === "string" || (props?.img_url).slice(0, 38) === 'https://firebasestorage.googleapis.com' ? noFood : props.img_url} alt='pizza' />
                    </div>
                    <h3>{(props?.name).length > 16 ? (props?.name).slice(0, 16) + "..." : props?.name === "string" ? "Food Not Upload Yet" : props.name}</h3>
                    <span>Papa John's</span>
                    <div className={styles['product-price']}>
                        <div>
                            <span>${props?.price}</span>
                        </div>
                        <div className={styles['product-edit']}>
                            <button onClick={() => dispatch(openModalEdit())}>
                                <img src={editImg} alt='edit' />
                            </button>
                            <button onClick={() => dispatch(openModal())}>
                                <img src={trashImg} alt='trash' />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProductItem
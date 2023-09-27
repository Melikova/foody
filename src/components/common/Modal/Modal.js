import React from 'react';
import styles from 'components/common/Modal/modal.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from 'redux/features/modalSlice';

const Modal = () => {

    const selModal = useSelector((state) => state.modal.modalActive);
    const dispatch = useDispatch()

    return (
        <>
            <div className={selModal ? styles['show-modal-container'] : styles['modal-container']}>

                <div className={styles.overlay}>

                    <div className='flex flex-col justify-center items-center rounded absolute bg-white' id={styles['modal-position']} style={{ "width": "498px", "height": '226px', "boxShadow": "0px 3px 8px -2px rgba(0, 0, 0, 0.20)" }}>

                        <span className={styles["modal-head"]}>Are you sure it's deleted?</span>
                        <span className={styles["modal-para"]}>Attention! If you delete this product, it will not come back...</span>
                        <div className='max-md:flex max-md:flex-col-reverse'>
                            <button onClick={() => dispatch(closeModal())} className={styles['cancel-btn']}>cancel</button>
                            <button className={styles['delete-btn']}>delete</button>
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}

export default Modal
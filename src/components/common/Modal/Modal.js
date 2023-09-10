import React from 'react';
import styles from 'components/common/Modal/modal.module.css'

const Modal = () => {
    return (
        <>
            <div className={styles.overlay}>

                <div className='flex flex-col justify-center items-center rounded absolute bg-white' id={styles['modal-position']} style={{ "width": "498px", "height": '226px', "box-shadow": "0px 3px 8px -2px rgba(0, 0, 0, 0.20)" }}>

                    <span className={styles["modal-head"]}>Are you sure it's deleted?</span>
                    <span className={styles["modal-para"]}>Attention! If you delete this product, it will not come back...</span>
                    <div className='max-md:flex max-md:flex-col-reverse'>
                        <button className={styles['cancel-btn']}>cancel</button>
                        <button className={styles['delete-btn']}>delete</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Modal
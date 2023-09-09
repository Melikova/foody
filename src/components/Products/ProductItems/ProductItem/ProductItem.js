import React from 'react'
import styles from 'components/Products/ProductItems/ProductItem/productitem.module.css'
import pizzaImg from 'assets/images/foodImages/pizza.svg';
import editImg from 'assets/icons/edit.svg';
import trashImg from 'assets/icons/trash.svg';

const ProductItem = () => {
    return (
        <>
            <div className={styles["product-bg"]}>
                <div className={styles['product-detail']}>
                    <div>
                        <img src={pizzaImg} alt='pizza' />
                    </div>
                    <h3>Marqarita</h3>
                    <span>Papa John's</span>
                    <div  className={styles['product-price']}>
                        <div>
                            <span>$16</span>
                        </div>
                        <div className={styles['product-edit']}>
                            <button>
                                <img src={editImg} alt='edit' />
                            </button>
                            <button>
                                <img src={trashImg} alt='trash' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem
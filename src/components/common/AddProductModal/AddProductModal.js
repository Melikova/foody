import React, { useEffect } from 'react'
import styles2 from 'assets/styles/global.css'
import styles from 'components/common/EditModal/editmodal.module.css'
import productImg from 'assets/images/foodImages/miniPizza.svg'
import uploadImg from 'assets/icons/upload.svg'
import closeBtn from 'assets/icons/closeBtn.svg'
import Editselectbox from 'components/common/EditSelectBox/Editselectbox';
import { useSelector, useDispatch } from 'react-redux'
import { closeModalEdit, closeProductModal } from 'redux/features/modalSlice'

const EditModal = () => {

  const addProductModal = useSelector((state) => state.modal.addProductModal)
  const dispatch = useDispatch()

  useEffect(() => {
    const htmlEl = document.querySelector('html')

    if (addProductModal) htmlEl.style = "overflow:hidden"
    else htmlEl.style = 'overflow:auto'

  }, [addProductModal])

  return (
    <>
      <div className={addProductModal ? styles.overlay : ''}>

        <div className={addProductModal ? styles['show-editmodal'] : styles['editmodal-container']}>
          <div className={styles['editmodal-head']}>
            <h3>Add product</h3>
          </div>
          <div className={styles["editmodal-top"]}>
            <div className={styles['editmodal-left-contain']}>
              <div className={styles['editmodal-left-top']}>
                <h3>Add product</h3>
                <span>Upload your product image</span>
                <img src={productImg} alt='product' />
              </div>
              <div className={styles['editmodal-left-bot']}>
                <span>
                  Add your Product description and necessary information
                </span>
              </div>
            </div>
            <div className={styles['editmodal-right-contain']}>
              <div className={styles['mob-upload-text']}>
                <span>Upload your restaurants image</span>
              </div>
              <div className={styles['editmodal-right-top']}>
                <button>
                  <img src={uploadImg} alt="upload" />
                  upload
                </button>
              </div>
              <div className={styles['editmodal-right-bot']}>
                <div className={styles['mob-restaurant-info']}>
                  <span>
                    Add your Product description and necessary information
                  </span>
                </div>
                <form>
                  <div className={styles['product-name']}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='price' placeholder='Product Name' />
                  </div>
                  <div className={styles['product-description']}>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id={styles['desc']} placeholder='Description'></textarea>
                  </div>
                  <div className={styles['product-price']}>
                    <label htmlFor="price">Price</label>
                    <input type="text" id='price' placeholder='Price' />
                  </div>
                  <div className={styles['product-selectbox']}>
                    <label className={styles.restaurants} htmlFor="restaurants">Restaurants</label>
                    <Editselectbox />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className={styles['editmodal-bot']}>
            <button className={styles['edit-cancel']}>Cancel</button>
            <button className={styles['edit-update']}>Update Product</button>
          </div>

          <div className={styles['close-contain']}>
            <button onClick={() => dispatch(closeProductModal())} className={addProductModal ? styles['close-btn'] : styles['hide-close-btn']}>
              <img className={styles['close-btn-img']} src={closeBtn} alt="close-button" />
            </button>
          </div>

        </div>

      </div>


    </>
  )
}

export default EditModal
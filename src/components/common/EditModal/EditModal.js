import React, { useEffect, useState } from 'react'
import styles2 from 'assets/styles/global.css'
import styles from 'components/common/EditModal/editmodal.module.css'
import uploadImg from 'assets/icons/upload.svg'
import noFood from 'assets/images/foodImages/no-food.png'
import closeBtn from 'assets/icons/closeBtn.svg'
import Editselectbox from 'components/common/EditSelectBox/Editselectbox';
import { useSelector, useDispatch } from 'react-redux'
import { closeModalEdit } from 'redux/features/modalSlice'
import { useRef } from 'react'
import { useUpdateProductData } from 'hooks/useProductsData'

const EditModal = () => {

  const fileInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const descInputRef = useRef(null);
  const priceInputRef = useRef(null);

  const selEditModal = useSelector((state) => state.modal.isActive);
  const selEditProduct = useSelector((state) => state.products.editProduct);
  const selEditProductID = useSelector((state) => state.products.editProductID)
  const dispatch = useDispatch()

  useEffect(() => {
    const htmlEl = document.querySelector('html')

    if (selEditModal) htmlEl.style = "overflow:hidden"
    else htmlEl.style = 'overflow:auto'

  }, [selEditModal])

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setSelectedImage(file)
  }
  
  const  updateProduct = useUpdateProductData()

  const handleEditForm = () => {

    const selectedImg = selectedImage && URL.createObjectURL(selectedImage)
    
    const updateProductData = {
      id: selEditProductID,
      name: nameInputRef.current.value,
      description: descInputRef.current.value,
      img_url: selectedImg ? selectedImage : noFood,
      rest_id: selEditProduct['rest_id'],
      price: priceInputRef.current.value
    }
    console.log(updateProductData);
    updateProduct.mutateAsync(updateProductData)
  }

  return (
    <>
      <div className={selEditModal ? styles.overlay : ''}>

        <div className={selEditModal ? styles['show-editmodal'] : styles['editmodal-container']}>
          <div className={styles['editmodal-head']}>
            <h3>Edit product</h3>
          </div>
          <div className={styles["editmodal-top"]}>
            <div className={styles['editmodal-left-contain']}>
              <div className={styles['editmodal-left-top']}>
                <h3>Edit product</h3>
                <span>Upload your product image</span>
                <img src={selectedImage ? `${URL.createObjectURL(selectedImage)}` : selEditProduct ? selEditProduct['img_url'] : ''} alt='product' />
              </div>
              <div className={styles['editmodal-left-bot']}>
                <span>
                  Edit your Product description and necessary information
                </span>
              </div>
            </div>
            <div className={styles['editmodal-right-contain']}>
              <div className={styles['mob-upload-text']}>
                <span>Upload your restaurants image</span>
              </div>
              <div className={styles['editmodal-right-top']}>
                <button>
                  <img src={uploadImg} alt="upload" onClick={handleImageClick} />
                  <span>upload</span>
                  <input type="file" accept='image/*' onChange={handleImageChange} style={{ display: "none" }} ref={fileInputRef} />
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
                    <input type="text" id='price' ref={nameInputRef} value={selEditProduct && selEditProduct.name} placeholder='Product Name' />
                  </div>
                  <div className={styles['product-description']}>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id={styles['desc']} ref={descInputRef} value={selEditProduct && selEditProduct.description} placeholder='Description'></textarea>
                  </div>
                  <div className={styles['product-price']}>
                    <label htmlFor="price">Price</label>
                    <input type="text" id='price' ref={priceInputRef} value={selEditProduct && selEditProduct.price} placeholder='Price' />
                  </div>
                  <div className={styles['product-selectbox']}>
                    <label className={styles.restaurants} htmlFor="restaurants">Restaurants</label>
                    <Editselectbox productResCategory={selEditProduct && selEditProduct['rest_id']} />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className={styles['editmodal-bot']}>
            <button className={styles['edit-cancel']}>Cancel</button>
            <button className={styles['edit-update']} onClick={handleEditForm}>Update Product</button>
          </div>

          <div className={styles['close-contain']}>
            <button onClick={() => dispatch(closeModalEdit())} className={selEditModal ? styles['close-btn'] : styles['hide-close-btn']}>
              <img className={styles['close-btn-img']} src={closeBtn} alt="close-button" />
            </button>
          </div>

        </div>

      </div>


    </>
  )
}

export default EditModal
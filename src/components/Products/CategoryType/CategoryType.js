import React from 'react'
import styles from 'components/Products/CategoryType/categorytype.module.css'
import SelectBox from 'components/common/SelectBox/Selectbox'
import { useTranslation } from 'react-i18next'

const CategoryType = () => {

    const { t } = useTranslation()

    return (

        <>
            <div className={styles['category-type-bg']}>
                <div className='flex max-md:flex-col justify-between items-center py-5 px-7'>
                    <div className='max-md:mb-4'>
                        <h2 className={styles['products-head-text']}>{t("Products")}</h2>
                    </div>
                    <div>
                        <SelectBox />
                    </div>

                </div>

            </div>
        </>

    )
}

export default CategoryType
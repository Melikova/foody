import React from 'react'
import CategoryType from 'components/Products/CategoryType/CategoryType'
import ProductItems from 'components/Products/ProductItems/ProductItems'
import ProductContainer from 'components/common/Container/ProductContainer'
import Modal from 'components/common/Modal/Modal'
import EditModal from 'components/common/EditModal/EditModal'
import AdminLayout from 'layouts/AdminLayout'

const Products = () => {

        
    
    return (
        <>
            <AdminLayout>
                <ProductContainer>
                    <CategoryType />
                    <ProductItems />
                    <Modal />
                    <EditModal />
                </ProductContainer>
            </AdminLayout>
        </>
    )
}

export default Products
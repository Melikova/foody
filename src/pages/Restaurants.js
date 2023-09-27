import ProductContainer from 'components/common/Container/ProductContainer'
import ResCategoryType from 'components/Restaurants/ResCategoryType/ResCategoryType'
import RestaurantItems from 'components/Restaurants/RestaurantItems/RestaurantItems'
import ResEditModal from 'components/Restaurants/ResEditModal/ResEditModal';
import DelModal from 'components/Restaurants/DelModal/DelModal'
import React from 'react'
import { ResAddModal } from 'components/Restaurants/ResAddModal/ResAddModal';
import AdminLayout from 'layouts/AdminLayout';

const Restaurants = () => {
    return (
        <AdminLayout>
            <ProductContainer>
                <ResCategoryType />
                <RestaurantItems />
                <DelModal />
                <ResEditModal />
                <ResAddModal />
            </ProductContainer>
        </AdminLayout>
    )
}

export default Restaurants
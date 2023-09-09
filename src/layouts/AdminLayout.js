import React from 'react'
import Header from 'components/common/Header/Header'
import Navbar from 'components/common/Navbar/Navbar'
import Container from 'components/common/Container/Container'
import styles from 'layouts/adminlayout.module.css'


const AdminLayout = ({ children }) => {
    return (
        <>
            <div className={styles.adminLayout}>
                <Header />
                <Container>
                    <Navbar />
                    {children}
                </Container>
            </div>
        </>
    )
}

export default AdminLayout
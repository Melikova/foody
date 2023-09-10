import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from 'components/common/Navbar/navbar.module.css'
import dashboard from 'assets/icons/navIcons/dashIcon.svg';
import products from 'assets/icons/navIcons/storeIcon.svg';
import restaurants from 'assets/icons/navIcons/restaurant.svg';
import category from 'assets/icons/navIcons/category.svg'
import orders from 'assets/icons/navIcons/orders.svg';
import offer from 'assets/icons/navIcons/offer.svg';
import logout from 'assets/icons/navIcons/logout.svg'

const Navbar = () => {
  return (
    <>

      <nav>

        <div className={styles['navbar-container']}>

          <ul>

            <li>
              <NavLink to='/dashboard' className={styles['navbar']}>
                <img src={dashboard} alt='dashboard' />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to='/products' className={styles['navbar']}>
                <img src={products} alt='products' />
                Products
              </NavLink>
            </li>

            <li>
              <NavLink to='/restaurants' className={styles['navbar']}>
                <img src={restaurants} alt='restaurants' />
                Restaurants
              </NavLink>
            </li>

            <li>
              <NavLink to='/category' className={styles['navbar']}>
                <img src={category} alt='category' />
                Category
              </NavLink>
            </li>

            <li>
              <NavLink to='/orders' className={styles['navbar']}>
                <img src={orders} alt='orders' />
                Orders
              </NavLink>
            </li>

            <li>
              <NavLink to='/offer' className={styles['navbar']}>
                <img src={offer} alt='offer' />
                Offer
              </NavLink>
            </li>

            <li>
              <NavLink className={`${styles['navbar']} ${styles['navbar-last']}`}>
                <img src={logout} alt='logout' />
                Logout
              </NavLink>
            </li>

          </ul>

        </div>

      </nav>

    </>
  )
}

export default Navbar
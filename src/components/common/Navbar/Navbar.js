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
              <NavLink to='/dashboard' id={styles['navbar']} className={({isActive}) => isActive ? styles['active'] : ''}>
                <img src={dashboard} alt='dashboard' />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to='/products' id={styles['navbar']}  className={({isActive}) => isActive ? styles['active'] : ''}>
                <img src={products} alt='products' />
                Products
              </NavLink>
            </li>

            <li>
              <NavLink to='/restaurants' id={styles['navbar']}  className={({isActive}) => isActive ? styles['active'] : ''}>
                <img src={restaurants} alt='restaurants' />
                Restaurants
              </NavLink>
            </li>

            <li>
              <NavLink to='/category' id={styles['navbar']}  className={({isActive}) => isActive ? styles['active'] : ''}>
                <img src={category} alt='category' />
                Category
              </NavLink>
            </li>

            <li>
              <NavLink to='/orders' id={styles['navbar']}  className={({isActive}) => isActive ? styles['active'] : ''}>
                <img src={orders} alt='orders' />
                Orders
              </NavLink>
            </li>

            <li>
              <NavLink to='/offer' id={styles['navbar']}  className={({isActive}) => isActive ? styles['active'] : ''}>
                <img src={offer} alt='offer' />
                Offer
              </NavLink>
            </li>

            <li>
              <NavLink id={styles['navbar']} className={styles['navbar-last']}>
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
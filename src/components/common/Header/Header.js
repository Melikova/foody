import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from 'components/common/Header/header.module.css'
import logo from 'assets/icons/logo.svg'
import plusBtn from "assets/icons/plusBtn.svg"
import mobPlusBtn from 'assets/icons/mobPlusBtn.svg'
import ukFlag from 'assets/icons/countryFlags/uk.svg'
import admin from 'assets/icons/admin.svg'
import hamburger from 'assets/icons/hamburger.svg'
import dashboard from 'assets/icons/navIcons/dashIcon.svg';
import products from 'assets/icons/navIcons/storeIcon.svg';
import restaurants from 'assets/icons/navIcons/restaurant.svg';
import category from 'assets/icons/navIcons/category.svg'
import orders from 'assets/icons/navIcons/orders.svg';
import offer from 'assets/icons/navIcons/offer.svg';
import logout from 'assets/icons/navIcons/logout.svg';
import mobFoodyLogo from 'assets/icons/mobFoodyLogo.svg';
import leftArrow from 'assets/icons/leftArrow.svg';


const Header = () => {

  const navbar = useRef();

  const handleHamMenu = () => {
    navbar.current.style = 'left: 0'
  }

  const closeHamMenu = () => {
    navbar.current.style = 'left: -500px'
  }


  return (
    <>
      <header>

        <div className={styles['header-bg']}>

          <div className={styles['header-left']}>
            <button onClick={() => handleHamMenu()} className={styles['ham-menu']}>
              <img src={hamburger} alt="hamburger-menu" />
            </button>
            <Link>
              <img src={logo} alt='logo' />
            </Link>
          </div>

          <div className={styles['header-right-container']}>

            <div className={styles['header-right-first']}>
              <button className={styles['add-product-btn']}>
                <img src={plusBtn} alt='plus-button' />
                ADD PRODUCT
              </button>
              <button className={styles['add-product-mob-btn']}>
                <img src={mobPlusBtn} alt='mobile-plus-button' />
              </button>
            </div>

            {/* <div className={styles['header-right-second']}>
              <button className={styles['language-btn']}>
                <img src={ukFlag} alt='uk-flag' />
              </button>
            </div> */}

            <div className={styles['header-right-third']}>
              <img src={admin} alt='userimage' />
              <span>Admin</span>
            </div>

          </div>

        </div>

        <div className={styles['navbar-container']} ref={navbar}>

          <div className={styles['logo-head']}>
            <button onClick={() => closeHamMenu()}>
              <img src={leftArrow} alt="left-arrow" />
            </button>
            <img src={mobFoodyLogo} alt="foody-logo" />
          </div>

          <nav>
            <ul className={styles['mob-navbar-contain']}>

              <li>
                <NavLink className={styles['mob-navbar']}>
                  <img src={dashboard} alt='dashboard' />
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink className={styles['mob-navbar']}>
                  <img src={products} alt='products' />
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink className={styles['mob-navbar']}>
                  <img src={restaurants} alt='restaurants' />
                  Restaurants
                </NavLink>
              </li>

              <li>
                <NavLink className={styles['mob-navbar']}>
                  <img src={category} alt='category' />
                  Category
                </NavLink>
              </li>

              <li>
                <NavLink className={styles['mob-navbar']}>
                  <img src={orders} alt='orders' />
                  Orders
                </NavLink>
              </li>

              <li>
                <NavLink className={styles['mob-navbar']}>
                  <img src={offer} alt='offer' />
                  Offer
                </NavLink>
              </li>

              <li>
                <NavLink className={`${styles['mob-navbar']} ${styles['mob-navbar-last']}`}>
                  <img src={logout} alt='logout' />
                  Logout
                </NavLink>
              </li>

            </ul>

          </nav>

        </div>

      </header>
    </>
  )
}

export default Header
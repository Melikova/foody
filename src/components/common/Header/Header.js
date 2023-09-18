import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from 'components/common/Header/header.module.css'
import ukFlag from 'assets/icons/countryFlags/uk.svg';
import azeFlag from 'assets/icons/countryFlags/azeFlag.png';
import turkeyFlag from 'assets/icons/countryFlags/turkeyFlag.png';
import logo from 'assets/icons/logo.svg'
import plusBtn from "assets/icons/plusBtn.svg"
import mobPlusBtn from 'assets/icons/mobPlusBtn.svg'
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
import { useDispatch, useSelector } from 'react-redux';
import { addProductModal } from 'redux/features/modalSlice';
import { handleFlag } from 'redux/features/langSlice';
import { useTranslation } from 'react-i18next';

const Header = () => {

  const dispatch = useDispatch();
  const navbar = useRef();
  const [isActive, setActive] = useState(false);

  const selFlag = useSelector((state) => state.language.langParam);


  const openHamMenu = () => {
    navbar.current.style = 'left: 0'
  }

  const closeHamMenu = () => {
    navbar.current.style = 'left: -500px'
  }

  const handleLang = () => {
    setActive(!isActive)
  }

  useEffect(() => {
    const lang = localStorage.getItem("lang")
    dispatch(handleFlag(lang))
    i18n.changeLanguage(lang)
  })

  const { t, i18n } = useTranslation()

  return (

    <>
      <header>
        <div className={styles['header-bg']}>
          <div className={styles['header-left']}>
            <button onClick={() => openHamMenu()} className={styles['ham-menu']}>
              <img src={hamburger} alt="hamburger-menu" />
            </button>
            <Link>
              <img src={logo} alt='logo' />
            </Link>
          </div>

          <div className={styles['header-right-container']}>

            <div className={styles['header-right-first']}>
              <button onClick={() => dispatch(addProductModal())} className={styles['add-product-btn']}>
                <img src={plusBtn} alt='plus-button' />
                {t('Add Product')}
              </button>

              <button className={styles['add-product-mob-btn']}>
                <img src={mobPlusBtn} alt='mobile-plus-button' />
              </button>
            </div>

            <div className={styles['header-right-second']}>

              <button onClick={() => handleLang()} className={styles['language-btn']}>
                <img src={selFlag === "tr" ? turkeyFlag : selFlag === "aze" ? azeFlag : selFlag === "uk" ? ukFlag : ukFlag} alt='uk-flag' />
              </button>
              {isActive ? <div className={styles['show-flag-area']}>
                {
                  selFlag === 'uk' ? '' : <button onClick={() => dispatch(handleFlag("uk"))} className={styles['language-btn']}>
                    <img src={ukFlag} alt='uk-flag' />
                  </button>
                }

                {selFlag === 'aze' ? '' : <button onClick={() => dispatch(handleFlag("aze"))} className={styles['language-btn']}>
                  <img src={azeFlag} alt='aze-flag' />
                </button>}

                {selFlag === 'tr' ? '' : <button onClick={() => dispatch(handleFlag("tr"))} className={styles['language-btn']}>
                  <img src={turkeyFlag} alt='turkey-flag' />
                </button>}
              </div> : ''
              }

            </div>

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
                <NavLink to='/dashboard' id={styles['mob-navbar']} className={({ isActive }) => isActive ? styles['active'] : ''}>
                  <img src={dashboard} alt='dashboard' />
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink to='/products' id={styles['mob-navbar']} className={({ isActive }) => isActive ? styles['active'] : ''}>
                  <img src={products} alt='products' />
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink to='/restaurants' id={styles['mob-navbar']} className={({ isActive }) => isActive ? styles['active'] : ''}>
                  <img src={restaurants} alt='restaurants' />
                  Restaurants
                </NavLink>
              </li>

              <li>
                <NavLink to='/category' id={styles['mob-navbar']} className={({ isActive }) => isActive ? styles['active'] : ''}>
                  <img src={category} alt='category' />
                  Category
                </NavLink>
              </li>

              <li>
                <NavLink to='/orders' id={styles['mob-navbar']} className={({ isActive }) => isActive ? styles['active'] : ''}>
                  <img src={orders} alt='orders' />
                  Orders
                </NavLink>
              </li>

              <li>
                <NavLink to='/offer' id={styles['mob-navbar']} className={({ isActive }) => isActive ? styles['active'] : ''}>
                  <img src={offer} alt='offer' />
                  Offer
                </NavLink>
              </li>

              <li>
                <NavLink to='/logout' id={styles['mob-navbar']} className={styles['mob-navbar-last']}>
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
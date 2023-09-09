import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'components/common/Header/header.module.css'
import logo from 'assets/icons/logo.svg'
import plusBtn from "assets/icons/plusBtn.svg"
import mobPlusBtn from 'assets/icons/mobPlusBtn.svg'
import ukFlag from 'assets/icons/countryFlags/uk.svg'
import admin from 'assets/icons/admin.svg'
import hamburger from 'assets/icons/hamburger.svg'

const Header = () => {
  return (
    <>
      <header>

        <div className={styles['header-bg']}>

          <div className={styles['header-left']}>
            <button className={styles['ham-menu']}>
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

      </header>
    </>
  )
}

export default Header
import React from 'react';
import style from './style.module.scss';
import nav_icon from '../../../assets/images/nav-icon.png'
const NavLogo = () => {
  return (
    <div className={style.logo}><img className={style.nav_icon} src={nav_icon} alt="icon" />
    <h1 className={style.h1}>Tello</h1></div>
  )
}

export default NavLogo
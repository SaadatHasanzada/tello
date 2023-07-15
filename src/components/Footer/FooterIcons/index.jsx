import React from 'react';
import NavLogo from '../../Navbar/NavLogo';
import style from './style.module.scss';
import instagram from '../../../assets/images/instagram.svg';
import facebook from '../../../assets/images/facebook.svg';
import youtube from '../../../assets/images/youtube.svg';
import twitter from '../../../assets/images/twitter.svg';

const FooterIcons = () => {
  return (
    <div className={style.icons}>
        <NavLogo/>
        <div className={style.social_media}>
            <a href="https://www.instagram.com/"><img src={instagram} alt="icon" /></a>
            <a href="https://www.facebook.com/"><img src={facebook} alt="icon" /></a>
            <a href="https://www.youtube.com/"><img src={youtube} alt="icon" /></a>
            <a href="https://www.twitter.com/"><img src={twitter} alt="icon" /></a>
        </div>
    </div>
  )
}

export default FooterIcons
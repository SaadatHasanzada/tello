import React from 'react';
import pin from '../../../assets/images/pin.svg';
import email from '../../../assets/images/email.svg';
import phone from '../../../assets/images/phoneFooter.svg';
import style from './style.module.scss';

const FooterContact = () => {
  return (
    <ul className={style.list}>
        <p> 
            Əlaqə</p>
        <li><img src={pin} alt="icon" />
            M. K. Ataturk avenue 89, Baku, Azerbaijan</li>
        <li><img src={email} alt="icon" />example@gmail.com</li>
        <li><img src={phone} alt="icon" />
            *2108</li>
        </ul>
  )
}

export default FooterContact
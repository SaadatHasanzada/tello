import React from 'react';
import style from './style.module.scss';
import copyright from '../../../assets/images/copyright.svg';

const FooterCredit = () => {
  return (
    <div className={style.footer_credit}>
        <div>
            <span>Qaydalar və Şərtlər</span>
            <span>Məxfilik siyasəti</span>
        </div>
        <div>
            <img src={copyright} alt="copyright" />
       Tello 2023. Bütün hüquqlar qorunur.
        </div>
        
    </div>
  )
}

export default FooterCredit
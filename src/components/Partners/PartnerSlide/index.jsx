import React from 'react';
import style from './style.module.scss';

const PartnerSlide = ({img}) => {
  return (
    <div className={style.slide}>
<img src={img} alt="partner" />
    </div>
  )
}

export default PartnerSlide
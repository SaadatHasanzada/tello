import React from 'react';
import style from './style.module.scss';
import ad1 from '../../assets/images/ad1.svg'
import ad2 from '../../assets/images/ad2.svg'

const Ads = () => {
  return (
    <section className={style.ads}>
        <div className={style.ads_container}>
<img src={ad1} alt="ad" />
<img src={ad2} alt="ad" />
        </div>
    </section>
  )
}

export default Ads
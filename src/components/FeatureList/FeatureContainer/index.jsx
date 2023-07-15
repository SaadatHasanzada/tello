import React from 'react';
import FeatureItem from '../FeatureItem';
import style from './style.module.scss';
import card from '../../../assets/images/card-pos.svg';
import box from '../../../assets/images/box.svg';
import medal from '../../../assets/images/medal-star.svg';
const FeatureContainer = () => {
  return (
    <section className={style.features}>
        <div className={style.feature_container}>
 <FeatureItem img={box} title='Çatdırılma'/>
        <FeatureItem img={card} title='Kredit'/>
        <FeatureItem img={medal }title='Zəmanət'/>
        </div>
       
    </section>
  )
}

export default FeatureContainer
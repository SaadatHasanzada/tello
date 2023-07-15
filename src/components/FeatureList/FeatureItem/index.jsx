import React from 'react';
import style from './style.module.scss';

const FeatureItem = ({title,img}) => {
  return (
    <div className={style.item}>
<img src={img} alt="featureIcon" />
<h3>{title}</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  )
}

export default FeatureItem
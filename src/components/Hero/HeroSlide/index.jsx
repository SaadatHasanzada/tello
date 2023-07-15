import React from 'react';
import style from './style.module.scss';
import hero_img from '../../../assets/images/hero-img.png';
const HeroSlide = () => {
  return (
    <div className={style.slide}>
        <div className={style.hero_text}>
            <h1>Buy & Sell <br /> What's Now & Next </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, cum? </p>
        </div>
        <img src={hero_img} alt="phone" />
    </div>
  )
}

export default HeroSlide
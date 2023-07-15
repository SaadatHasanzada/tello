import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import HeroSlide from '../HeroSlide';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import style from './style.module.scss';

const HeroSlider = () => {

  const [isClickable, setIsClickable] = React.useState(true);

  React.useEffect(() => {
    const handleInitialScreenSize =  () => {
      setIsClickable(window.innerWidth >= 768); 
    };

    handleInitialScreenSize(); 
    return () => {
    };
  }, []);
 
  return (
    <section className={style.hero}>
        <div className={style.overlay}></div>
       <Swiper className={style.swiperWrapper}
    modules={[Pagination,Autoplay]}
    {...(isClickable && { pagination: { clickable: true } })}
    autoplay
    spaceBetween={50}
    slidesPerView={1}

  >
    <SwiperSlide><HeroSlide/></SwiperSlide>
    <SwiperSlide><HeroSlide/></SwiperSlide>
    <SwiperSlide><HeroSlide/></SwiperSlide>
 
  </Swiper>  
    </section>
   
  )
}

export default HeroSlider
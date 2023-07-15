import React from 'react';
import style from './style.module.scss';
import PartnerSlide from '../PartnerSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import Toshiba from '../../../assets/images/Toshiba.svg';
import Philips from '../../../assets/images/Philips.svg';
import hp from '../../../assets/images/hp.svg';
import Electrolux from '../../../assets/images/Electrolux.svg';
import gorenje from '../../../assets/images/gorenje.svg';
import Bosch from '../../../assets/images/Bosch.svg';
import acer from '../../../assets/images/acer.svg';

const PartnerSlider = () => {
  return (
    <section className={style.partner_slider}>
          <Swiper className={style.swiper}
           modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        768:{
            spaceBetween:10,
      slidesPerView:3
        },
        896:{
            spaceBetween:20,
      slidesPerView:5
        },
        
      }}
    >
      <SwiperSlide><PartnerSlide img={Toshiba}/></SwiperSlide>
      <SwiperSlide><PartnerSlide img={Philips}/></SwiperSlide>
      <SwiperSlide><PartnerSlide img={hp}/></SwiperSlide>
      <SwiperSlide><PartnerSlide img={Electrolux}/></SwiperSlide>
      <SwiperSlide><PartnerSlide img={gorenje}/></SwiperSlide>
      <SwiperSlide><PartnerSlide img={Bosch}/></SwiperSlide>
      <SwiperSlide><PartnerSlide img={acer}/></SwiperSlide>
     
      
    </Swiper>
    </section>
  )
}

export default PartnerSlider
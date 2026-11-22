import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CatSlider = () => {
  return (
    <div className='py-4'>
        <div className='container'>
            <Swiper
                slidesPerView={10}
                spaceBetween={30}
                modules={[Navigation]}
                className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>

      </Swiper>
        </div>
      
    </div>
  )
}

export default CatSlider

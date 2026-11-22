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
                spaceBetween={20}
                modules={[Navigation]}
                className="mySwiper"
      >
        <SwiperSlide>
            <div className='bg-white p-3 w-full rounded-md shadow-md'>
                
            </div>Slide 1</SwiperSlide>

      </Swiper>
        </div>
      
    </div>
  )
}

export default CatSlider

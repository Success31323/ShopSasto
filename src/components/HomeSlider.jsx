"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Navigation, Autoplay } from 'swiper/modules';
const HomeSlider = () => {
  return (
    <div className='homeSlider overflow-hidden py-3'>
        <div className='container'>
            <Swiper navigation={true} modules={[Navigation, Autoplay]}
             autoplay={{
                delay: 2500,
                disableOnInteraction: false,
             }}className="mySwiper">
                <SwiperSlide>
                    <div className='item'>
                    <Image src="/slide1.png" alt='side1' width={1334} height={514} className="w-full h-auto" priority/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='item'>
                    <Image src="/slide1.png" alt='side1' width={1334} height={514} className="w-full h-auto" priority/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='item'>
                    <Image src="/slide1.png" alt='side1' width={1334} height={514} className="w-full h-auto" priority/>
                    </div>
                </SwiperSlide>


        </Swiper>
        </div>
      
    </div>
  )
}

export default HomeSlider

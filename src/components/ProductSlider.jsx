"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import ProductItem from "./ProductItem";

const ProductSlider = () => {
  const items = Array.from({ length: 8 });
  return (
    <div className="productSlider py-3">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={6}
        spaceBetween={15}
        className="mySwiper"
      >
        {items.map((_, index) => (
          <SwiperSlide key={index}>
            <ProductItem />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider

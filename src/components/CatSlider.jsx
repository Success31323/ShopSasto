"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { name: "Fruits & Vegetables", image: "/fruits.png", href: "/" },
  { name: "Meats & Seafood", image: "/meat.png", href: "/" },
  { name: "Breakfast & Dairy", image: "/breakfast.png", href: "/" },
  { name: "Breads & Bakery", image: "/bakery.png", href: "/" },
  { name: "Beverages", image: "/fast food.png", href: "/" },
  { name: "Frozen Foods", image: "/frozen.png", href: "/" },
  { name: "Biscuits & Snacks", image: "/biscuits.png", href: "/" },
  { name: "Grocery & Staples", image: "/grocery.png", href: "/" },
  // { name: "Category 9", image: "/category9.png", href: "/" },
  // { name: "Category 10", image: "/category10.png", href: "/" },
];

const CatSlider = () => {
  return (
    <section className="py-4">
      <div className="container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={10}
          spaceBetween={20}
          className="mySwiper"
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <Link href={cat.href} className="group block">
                <div className="bg-white group-hover:bg-gray-100 transition p-3 w-full rounded-md shadow-md flex flex-col items-center justify-center">
                  <Image
                    src={cat.image}
                    alt="category"
                    width={90}
                    height={90}
                    className="w-[90px] h-[90px] object-contain transition group-hover:scale-105"
                  />
                  <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700 group-hover:text-primary transition">
                    {cat.name}
                  </h4>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CatSlider;
"use client";

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSlider from "./ProductSlider";

const tabCategories = [
  "Fruits & Vegetables",
  "Meats & Seafood",
  "Breakfast & Dairy",
  "Breads & Bakery",
  "Beverages",
  "Frozen Foods",
  "Biscuits & Snacks",
  "Grocery & Staples",
];

const PopularProducts = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="py-5 bg-gray-100">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <div className="w-[30%]">
            <h2 className="text-[22px] text-gray-800 font-[600]">
              Popular Products
            </h2>
            <p className="text-[16px] text-gray-600">
              Do not miss the current offers until the end of March.
            </p>
          </div>


          </div>
    </section>

    );
};

export default PopularProducts;
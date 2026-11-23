"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

const ProductItem = () => {
  return (
    <div className="productItem bg-white rounded-md shadow-md p-3 group overflow-hidden">
      <div className="imgWrapper overflow-hidden rounded-md">
        <Link href="/">
          <Image
            src="/product1.png"
            alt="product image"
            width={220}
            height={220}
            className="w-full h-auto transition group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="info p-3 flex flex-col gap-1">
        <span className="text-[14px] text-gray-700">Bingo</span>

        <Link
          href="/"
          className="text-[15px] text-gray-800 font-[500] hover:text-primary transition line-clamp-2"
        >
          Fresh Organic Grocery Item
        </Link>

        <Rating name="read-only" value={4} size="small" readOnly />

        <div className="flex items-center justify-between mt-1">
          <span className="text-[18px] font-[600] text-primary">$14.99</span>
          <span className="text-[15px] text-gray-500 line-through">$19.99</span>
        </div>

        <Button className="btn-border-green w-full mt-2">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductItem;
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductReusebleCard from "../../components/productcardreusble/ProductReusebleCard";
import "./ProductsCard.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProductsCard() {
  const [productdata, setProductData] = useState([]);

  const fetchProduct = async () => {
    const response = await axios.get(
      "https://grevitasfrontend-1.onrender.com/api/v1/products"
    );
    console.log(response?.data);
    setProductData(response?.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="allcontainer px-10 py-10">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      <Swiper
  spaceBetween={20}
  navigation={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  modules={[Navigation, Autoplay]}
  breakpoints={{
    320: { slidesPerView: 1 },   // mobile
    768: { slidesPerView: 2 },   // tablet
    1024: { slidesPerView: 3 },  // desktop
    1440: { slidesPerView: 4 },  // large screen
  }}
>
  {productdata.map((item) => (
    <SwiperSlide key={item._id}>
      <ProductReusebleCard
        id={item._id}
        image={item.images[0]}
        price={item.price}
        rating={item.rating}
        title={item.title}
        des={item.scent[0]}
      />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
}

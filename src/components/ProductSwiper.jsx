import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import ProductImage from "./ProductImage";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProductSwiper({ SwiperData, title }) {
    return (
        <div className="w-full h-[100%] bg-swiper-back border border-white rounded-lg">
            <div className="grid grid-rows-[5%, 90%] w-[100%] h-[100%]">
                <h1 className="h-[100%] w-[20%] text-blue-600 text-2xl p-4 font-product-home">
                    {title} <span>{">"}</span>
                </h1>
                <Swiper
                    className="w-[100%] h-[100] select-none self-center py-20 md:w-[100%]"
                    slidesPerView={5}
                    spaceBetween={10}
                    simulateTouch={true}
                    freeMode={true}
                    modules={[FreeMode, Navigation]}
                    loop={true}
                    navigation={true}
                    breakpoints={{
                        // When screen width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        // When screen width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        // When screen width is >= 1024px
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {SwiperData.map((data) => (
                        <SwiperSlide
                            key={data.key}
                            className="w-[10%] h-[100%] mx-20 flex flex-col justify-center items-center"
                        >
                            <ProductImage data={data} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
}

export default ProductSwiper;

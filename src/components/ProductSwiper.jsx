import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import ProductImage from "./ProductImage";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProductSwiper({ SwiperData, title }) {
    const [indexNow, setIndexNow] = useState(null);

    return (
        <div className="grid grid-cols-[30%,70%] w-[80%] h-[100%] items-end bg-swiper-back border border-white rounded-lg">
            <div className="bg-gradient-to-r from-blue-200 to-white border border-white rounded-lg w-[100%] h-[100%]">
                <ProductImage />
            </div>
            <div className="grid grid-rows-[40%, 60%] w-full h-[100%]">
                <h1 className="h-[100%]">{title}</h1>
                <Swiper
                    className="h-[100%] w-full select-none self-end"
                    onSlideChange={(e) => setIndexNow(e.realIndex)}
                    slidesPerView={5}
                    spaceBetween={20}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: true,
                    }}
                    simulateTouch={true}
                    freeMode={true}
                    modules={[FreeMode, Navigation, Autoplay]}
                    loop={true}
                    navigation={{
                        prevEl: null,
                    }}
                >
                    {SwiperData.map((data) => (
                        <SwiperSlide key={data.key} className="flex flex-col justify-end items-end">
                            <img
                                src={data.url}
                                alt={data.className}
                                className="w-[200px] h-[200px] object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default ProductSwiper;

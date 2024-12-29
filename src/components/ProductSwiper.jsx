import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import ProductImage from "./ProductImage";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProductSwiper({ SwiperData }) {
    const [indexNow, setIndexNow] = useState(null);

    const handleSetIndex = (swiper) => {
        setIndexNow(swiper.activeIndex);
    };

    return (
        <div className="grid grid-cols-[30%,70%] w-[80%] h-[100%] bg-gradient-to-l from-blue-200 to-white border border-white rounded-lg">
            <div className="bg-orange-400 w-[100%] h-[100%]"></div>
            <Swiper
                className="h-[100%] w-full select-none"
                onSlideChange={handleSetIndex}
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
                navigation={true}
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
    );
}

export default ProductSwiper;

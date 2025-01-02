import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import ProductImage from "./ProductImage";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProductSwiper({ SwiperData, title }) {
    const swiperRef = useRef(null); // Ref to store the Swiper instance
    return (
        <div
            className="w-full bg-swiper-back border border-white rounded-lg bg-gray-100 my-4"
            onMouseEnter={() => swiperRef.current?.autoplay.stop()} // Stop autoplay on hover
            onMouseLeave={() => swiperRef.current?.autoplay.start()} // Resume autoplay on mouse leave
        >
            <div className="grid grid-rows-[5%, 90%] w-[100%] h-[100%]">
                <h1 className="w-[20%] text-gray-900 text-xl p-2 font-product-home whitespace-nowrap">{title}</h1>
                <Swiper
                    className="w-[100%] h-full select-none self-center my-4 md:w-[100%]"
                    modules={[Autoplay, FreeMode, Navigation]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    simulateTouch={true}
                    freeMode={true}
                    loop={true}
                    navigation={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance in ref
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        750: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1100: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                        1920: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {SwiperData.map((data) => (
                        <SwiperSlide
                            key={data.key}
                            className="w-[10%] flex flex-row justify-center top-5 pl-20 md:pl-8"
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

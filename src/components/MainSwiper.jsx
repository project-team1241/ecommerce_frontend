import React from "react";
import { MainSwiperData } from "../Utils/Constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MainSwiper = () => {
    return (
        <div className="w-screen">
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                simulateTouch={true}
                grabCursor={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
            >
                {MainSwiperData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img src={slide.url} alt={slide.alt} className=" w-full h-full object-cover border" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MainSwiper;

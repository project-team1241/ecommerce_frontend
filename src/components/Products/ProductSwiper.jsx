import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import ProductImage from "./ProductImage";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { shuffleArray } from "../../Utils/api/algorithms";

function ProductSwiper({ SwiperData, title }) {
    const [allData, setAllData] = useState(SwiperData);

    useEffect(() => {
        const shuffledData = shuffleArray(SwiperData);
        setAllData(shuffledData);
    }, [SwiperData]);

    return (
        <div className="w-full bg-swiper-back border border-white rounded-lg bg-gray-100 my-3">
            <div className="grid grid-rows-[5%, 90%] w-[100%] h-[100%] border border-slate-200 rounded-md">
                <h1 className="text-gray-900 md:text-xl text-base p-1 font-product-home whitespace-nowrap ">
                    {title}
                </h1>
                <Swiper
                    className="w-[100%] h-full select-none self-center my-4 md:w-[100%]"
                    modules={[Autoplay, FreeMode, Navigation]}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    simulateTouch={true}
                    freeMode={true}
                    loop={true}
                    navigation={true}
                    centeredSlides={false}
                    slidesOffsetBefore={8}
                    slidesOffsetAfter={8}
                    watchOverflow={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 2.1,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 2.2,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 3.1,
                            spaceBetween: 16,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 16,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 16,
                        },
                        1536: {
                            slidesPerView: 6,
                            spaceBetween: 16,
                        },
                    }}
                >
                    {Array.isArray(allData) &&
                        allData.map((data) => (
                            <SwiperSlide
                                key={data.productId}
                                className="flex flex-row justify-center"
                            >
                                <ProductImage
                                    key={data.productId}
                                    data={data}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
}

export default ProductSwiper;

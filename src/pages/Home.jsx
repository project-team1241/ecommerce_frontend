import React, { useEffect } from "react";
import MainSwiper from "../components/MainSwiper";
import ProductSwiper from "../components/ProductSwiper";
import Ads from "../components/Ads";

//Data for product swiper
import { MenProducts, WomenProducts, Footware } from "../Utils/Constants";

function Home() {
    return (
        <div className=" w-screen pt-[70px] p-1 pr-2 bg-gray-50 overflow-y-scroll">
            <MainSwiper />
            <ProductSwiper SwiperData={MenProducts} title={"Men Fashion"} />
            <ProductSwiper SwiperData={WomenProducts} title={"Women Fashion"} />
            <Ads/>
            <ProductSwiper SwiperData={Footware} title={"Footware"} />
        </div>
    );
}

export default Home;

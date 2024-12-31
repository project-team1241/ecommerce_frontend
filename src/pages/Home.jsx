import React, { useEffect } from "react";
import MainSwiper from "../components/MainSwiper";
import ProductSwiper from "../components/ProductSwiper";
import Ads from "../components/Ads";

//Data for product swiper
import { MenProducts, WomenProducts, Footware } from "../Utils/Constants";

function Home() {
    return (
        <div className="grid grid-rows-5 gap-6 place-items-center py-8">
            <MainSwiper />
            <ProductSwiper SwiperData={MenProducts} title={"Men Fashion"} />
            <Ads />
            <ProductSwiper SwiperData={WomenProducts} title={"Women Fashion"} />
            <ProductSwiper SwiperData={Footware} title={"Footware"} />
        </div>
    );
}

export default Home;

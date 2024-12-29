import React, { useEffect } from "react";
import MainSwiper from "../components/MainSwiper";
import ProductSwiper from "../components/ProductSwiper";
import Ads from "../components/Ads";
import Validate from "../components/Validate";

//Data for product swiper
import { MenProducts, WomenProducts, Footware } from "../Utils/Constants";

function Home() {
    return (
        <div className="grid grid-rows-3 gap-8 place-items-center py-16">
            <MainSwiper />
            <ProductSwiper SwiperData={MenProducts} />
            <Ads />
            <Validate></Validate>
        </div>
    );
}

export default Home;
